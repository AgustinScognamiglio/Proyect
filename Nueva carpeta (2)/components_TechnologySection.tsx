'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

const technologies = [
  {
    title: "Sistema de Propulsión E-Core",
    description: "Tecnología híbrida de última generación que combina potencia y eficiencia",
    stats: [
      { label: "Potencia", value: "800", unit: "CV" },
      { label: "Torque", value: "1.000", unit: "Nm" },
      { label: "0-100", value: "2.8", unit: "s" }
    ],
    image: "https://images-porsche.imgix.net/-/media/4EAD169CB8B246FF8D4081D80BA72357_8F96228287BD4DAA95C0579673320F0B_911-gt3-engine?w=999&ar=125%3A66&q=85&auto=format"
  },
  {
    title: "Aerodinámica Activa",
    description: "Sistema inteligente que ajusta la aerodinámica en tiempo real",
    stats: [
      { label: "Carga", value: "860", unit: "kg" },
      { label: "Eficiencia", value: "95", unit: "%" },
      { label: "Elementos", value: "15", unit: "" }
    ],
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Products/911-GT3-RS/Gallery/P22_0354_a3_rgb.jpg/jcr:content/P22_0354_a3_rgb.jpg"
  },
  {
    title: "Chasis Inteligente PASM",
    description: "Adaptación instantánea a cualquier condición de conducción",
    stats: [
      { label: "Respuesta", value: "8", unit: "ms" },
      { label: "Modos", value: "5", unit: "" },
      { label: "Sensores", value: "48", unit: "" }
    ],
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Products/911-GT3-RS/Gallery/P22_0355_a3_rgb.jpg/jcr:content/P22_0355_a3_rgb.jpg"
  }
]

export default function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Tecnología e Innovación
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Panel izquierdo - Tecnologías */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedTech === index ? 'bg-gray-800' : 'hover:bg-gray-900'
                }`}
                onClick={() => setSelectedTech(index)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {/* Barra de progreso lateral */}
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full bg-[#FF3B30]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: selectedTech === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>

                {selectedTech === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-3 gap-4"
                  >
                    {tech.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: statIndex * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-[#FF3B30] text-2xl font-bold">
                          {stat.value}
                          <span className="text-sm ml-1">{stat.unit}</span>
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Panel derecho - Visualización */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: selectedTech === index ? 1 : 0,
                  scale: selectedTech === index ? 1 : 0.8,
                  zIndex: selectedTech === index ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

