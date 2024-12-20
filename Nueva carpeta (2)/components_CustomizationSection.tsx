'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const colors = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Rojo', hex: '#FF0000' },
  { name: 'Azul', hex: '#0000FF' },
  { name: 'Amarillo', hex: '#FFFF00' },
]

export default function CustomizationSection() {
  const [selectedColor, setSelectedColor] = useState('#000000')

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10 font-sans"
        >
          Personaliza tu Porsche
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="relative">
              <img src="https://files.porsche.com/filestore/image/multimedia/none/911-carrera-s-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38/porsche-model.png" alt="Porsche 911" className="w-full" />
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: selectedColor, mixBlendMode: 'overlay', opacity: 0.5 }}
              ></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">Elige tu Color</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.hex)}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
            <p className="text-lg mb-6">
              Tu Porsche, tu estilo. Personaliza cada detalle para crear un vehículo que sea verdaderamente tuyo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 border-2 border-red-700 hover:border-red-800"
            >
              Configura tu Porsche
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

