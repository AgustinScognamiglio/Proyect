'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    title: "Aerodinámica",
    description: "Diseño optimizado para máxima eficiencia y estabilidad",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.3-.8.8l2 7.3-2.7 2.7c-.4.4-.4 1 0 1.4l3.8 3.8c.4.4 1 .4 1.4 0L11.2 20l7.3 2c.5.1.9-.3.8-.8z" />
      </svg>
    ),
    color: "#FF3B30"
  },
  {
    title: "Potencia",
    description: "Motores de alto rendimiento con tecnología de vanguardia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 12h-5" />
        <path d="M18 6h-5" />
        <path d="M18 18h-5" />
        <path d="M6 12v-2a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4v0a4 4 0 0 1-4-4v-2" />
      </svg>
    ),
    color: "#FFD700"
  },
  {
    title: "Precisión",
    description: "Control exacto y respuesta inmediata en cada curva",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    color: "#E5E7E9"
  }
]

export default function AnimatedFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Características Destacadas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="relative p-8 rounded-xl bg-gray-50 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredFeature === index ? 0.1 : 0 }}
                style={{ backgroundColor: feature.color }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="mb-6 text-6xl"
                animate={{
                  scale: hoveredFeature === index ? 1.2 : 1,
                  rotate: hoveredFeature === index ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ color: feature.color }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent"
                style={{ backgroundColor: feature.color }}
                initial={{ width: "0%" }}
                animate={{ width: hoveredFeature === index ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

