import { useState, useEffect } from 'react'
import { BLINK } from './constants'

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

export function useBlink(enabled = true) {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    if (!enabled) return

    let cancelled = false

    const loop = async () => {
      while (!cancelled) {
        const delay = BLINK.minInterval + Math.random() * (BLINK.maxInterval - BLINK.minInterval)
        await sleep(delay)
        if (cancelled) break

        // Close
        setIsBlinking(true)
        await sleep(BLINK.duration / 2 + BLINK.closedPause)
        if (cancelled) break

        // Open
        setIsBlinking(false)

        // Maybe double-blink
        if (Math.random() < BLINK.doubleChance) {
          await sleep(80)
          if (cancelled) break
          setIsBlinking(true)
          await sleep(BLINK.duration / 2 + BLINK.closedPause)
          if (cancelled) break
          setIsBlinking(false)
        }
      }
    }

    loop()
    return () => { cancelled = true }
  }, [enabled])

  return isBlinking
}
