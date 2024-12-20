'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const cars = [
  {
    name: "911 GT3 RS",
    image: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png",
    color: "#FF3B30"
  },
  {
    name: "918 Spyder",
    image: "https://files.porsche.com/filestore/image/multimedia/none/918-spyder-modelimage-sideshot/model/c287c2fb-2df4-11eb-80d3-005056bbdc38/porsche-model.png",
    color: "#FFD700"
  },
  {
    name: "Carrera GT",
    image: "https://files.porsche.com/filestore/image/multimedia/none/carrera-gt-modelimage-sideshot/model/c287c2fb-2df4-11eb-80d3-005056bbdc38/porsche-model.png",
    color: "#E5E7E9"
  }
]

export default function InteractiveShowroom() {
  const [selectedCar, setSelectedCar] = useState(0)
  const controls = useAnimation()

  const handleCarChange = async (index: number) => {
    await controls.start({ opacity: 0, x: -100 })
    setSelectedCar(index)
    controls.start({ opacity: 1, x: 0 })
  }

  return (
    <section className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Modelos Legendarios
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            animate={controls}
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3"
          >
            <img
              src={cars[selectedCar].image}
              alt={cars[selectedCar].name}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="md:w-1/3 space-y-6">
            {cars.map((car, index) => (
              <motion.button
                key={index}
                onClick={() => handleCarChange(index)}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  selectedCar === index ? 'bg-gray-800' : 'bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-xl font-bold text-white"
                  style={{ color: selectedCar === index ? car.color : 'white' }}
                >
                  {car.name}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

