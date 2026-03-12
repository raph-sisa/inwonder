import { useEffect, useRef, useCallback } from 'react'
import { type MotionValue } from 'framer-motion'

const DISPLACEMENT_STRENGTH = 0.04

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_color;
  uniform sampler2D u_depth;
  uniform vec2 u_mouse;
  uniform float u_strength;

  void main() {
    float depth = texture2D(u_depth, v_texCoord).r;
    vec2 offset = u_mouse * depth * u_strength;
    vec2 displaced = v_texCoord - offset;
    vec4 color = texture2D(u_color, displaced);
    float edge = smoothstep(0.0, 0.02, displaced.x)
               * smoothstep(0.0, 0.02, displaced.y)
               * smoothstep(0.0, 0.02, 1.0 - displaced.x)
               * smoothstep(0.0, 0.02, 1.0 - displaced.y);
    gl_FragColor = color * edge;
  }
`

interface MemojiCanvasProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  enabled?: boolean
  onLoad?: () => void
}

export function MemojiCanvas({ mouseX, mouseY, enabled = true, onLoad }: MemojiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<{
    gl: WebGLRenderingContext
    mouseLoc: WebGLUniformLocation
  } | null>(null)
  const animFrameRef = useRef<number>(0)
  const currentRef = useRef({ x: 0, y: 0 })

  const initGL = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const [colorImg, depthImg] = await Promise.all([
      loadImage('/images/memoji.png'),
      loadImage('/images/memoji-depth.png'),
    ])

    const aspect = colorImg.height / colorImg.width
    canvas.width = 600
    canvas.height = Math.round(600 * aspect)
    gl.viewport(0, 0, canvas.width, canvas.height)

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vs || !fs) return

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const texCoords = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])

    const posBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const texBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuf)
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW)
    const texLoc = gl.getAttribLocation(program, 'a_texCoord')
    gl.enableVertexAttribArray(texLoc)
    gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0)

    createTexture(gl, gl.TEXTURE0, colorImg)
    createTexture(gl, gl.TEXTURE1, depthImg)

    gl.uniform1i(gl.getUniformLocation(program, 'u_color'), 0)
    gl.uniform1i(gl.getUniformLocation(program, 'u_depth'), 1)
    gl.uniform1f(gl.getUniformLocation(program, 'u_strength'), DISPLACEMENT_STRENGTH)

    const mouseLoc = gl.getUniformLocation(program, 'u_mouse')!

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    glRef.current = { gl, mouseLoc }
    onLoad?.()
  }, [onLoad])

  const render = useCallback(() => {
    if (!glRef.current) {
      animFrameRef.current = requestAnimationFrame(render)
      return
    }

    const { gl, mouseLoc } = glRef.current

    // Read target from motion values, lerp for smooth WebGL animation
    const targetX = enabled ? mouseX.get() : 0
    const targetY = enabled ? mouseY.get() : 0
    const lerp = 0.06
    currentRef.current.x += (targetX - currentRef.current.x) * lerp
    currentRef.current.y += (targetY - currentRef.current.y) * lerp

    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform2f(mouseLoc, currentRef.current.x, -currentRef.current.y)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

    animFrameRef.current = requestAnimationFrame(render)
  }, [mouseX, mouseY, enabled])

  useEffect(() => {
    initGL()
    animFrameRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [initGL, render])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto block select-none pointer-events-none"
    />
  )
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createTexture(gl: WebGLRenderingContext, unit: number, img: HTMLImageElement) {
  gl.activeTexture(unit)
  const tex = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
}
