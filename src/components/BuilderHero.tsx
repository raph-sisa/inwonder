import { motion } from 'framer-motion'
import { asset } from '../utils/assets'

export function BuilderHero() {
  return (
    <section className="h-full flex flex-col justify-center px-6 sm:px-12 max-w-6xl mx-auto py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-12 md:gap-24">
        {/* Left column: Name and Statement */}
        <div className="flex-1 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-warm-400 mb-4">
              Product &amp; Design Builder
            </p>
            <h1 className="font-display font-medium text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight text-warm-900 mb-8">
              Raphael <br /> Sisa
            </h1>
            <div className="max-w-xl">
              <p className="font-display text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.3] text-warm-600 font-light mb-10">
                I build things that matter — from AI pipelines for startups to haptic feedback systems for hardware. 
                Earnest, curious, and direct. I prefer a workshop over a showroom.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-8">
              <motion.a
                href="#work"
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-mono text-sm tracking-wide transition-all hover:bg-accent-light"
                whileHover={{ x: 4 }}
              >
                View Artifacts
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </motion.a>
              
              <div className="flex flex-col font-mono text-[10px] uppercase tracking-tighter text-warm-400">
                <span>Based in LA</span>
                <span>Open to founding roles</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: The Artifact/Photo */}
        <motion.div 
          className="w-full md:w-1/3 order-1 md:order-2 flex justify-start md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative group">
            {/* The "Field Note" frame */}
            <div className="absolute -inset-4 border border-warm-200 opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-4 -left-4 font-mono text-[10px] text-warm-300 px-2 bg-warm-50">FIG. 01</div>
            
            <div className="w-48 h-64 md:w-64 md:h-80 bg-warm-100 overflow-hidden grayscale contrast-125 brightness-90 relative">
               <img 
                src={asset('/images/memoji.png')}
                alt="Portrait" 
                className="w-full h-full object-contain opacity-80"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply pointer-events-none" />
              {/* Grain overlay for this specific element */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')] bg-repeat" />
            </div>
            
            <p className="mt-4 font-mono text-[10px] text-warm-400 max-w-[180px]">
              Studio Portrait, 2026. <br /> Captured in the workshop.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
