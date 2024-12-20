'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const images = [
  {
    url: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2023/Motorsports/Porsche-963/M23_0273_fine.jpg/jcr:content/M23_0273_fine.jpg",
    title: "Innovación en Pista"
  },
  {
    url: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Motorsports/24h-Le-Mans/M22_2401_fine.jpg/jcr:content/M22_2401_fine.jpg",
    title: "Dominio en Le Mans"
  },
  {
    url: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2021/Motorsports/Porsche-99X-Electric/M21_3574_fine.jpg/jcr:content/M21_3574_fine.jpg",
    title: "Futuro Eléctrico"
  }
]

export default function ParallaxGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="min-h-screen bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Legado de Competición
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-white mb-6">Porsche is...</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Innovación", "Rendimiento", "Diseño", "Precisión", "Excelencia", "Pasión"].map((keyword, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/10 rounded-full text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-32">
          {images.map((image, index) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [100 * (index + 1), -100 * (index + 1)]
            )

            return (
              <motion.div
                key={index}
                className="relative h-96 rounded-xl overflow-hidden"
                style={{ y }}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <motion.h3
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {image.title}
                  </motion.h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

