'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function RacingHeritage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const racingStats = [
    { number: "19", text: "Victorias en Le Mans" },
    { number: "30000+", text: "Victorias en carreras" },
    { number: "33", text: "Campeonatos mundiales" },
    { number: "70+", text: "Años de historia en competición" }
  ]

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2023/Motorsports/Porsche-963/M23_0273_fine.jpg/jcr:content/M23_0273_fine.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale,
          opacity
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Legado en Competición
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {racingStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-6xl font-bold text-[#FF3B30] mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

