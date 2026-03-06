import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: { src: string; alt: string; caption?: string }[]
  columns?: 2 | 3
}

export function ImageGallery({ images, columns = 2 }: ImageGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <div className={`grid grid-cols-1 ${columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'} gap-3`}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(i)}
            className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white">{img.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {images[selected].caption && (
              <p className="absolute bottom-6 text-sm text-white/70 font-mono">
                {images[selected].caption}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
