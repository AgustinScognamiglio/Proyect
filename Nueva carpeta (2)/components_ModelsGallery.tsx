'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const models = [
  {
    name: '911',
    image: 'https://assets.auto.cl/nvi/porsche-911-38-g-dsg-4x4-2p-turbo-coupe-kjSKRXTjDb4VPz24RchRKu.png',
    specs: {
      capacity: '2+2',
      weight: '1,600 kg',
      engine: '3.0L Twin-Turbo I6',
      topSpeed: '308 km/h',
      acceleration: '3.5 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
  {
    name: 'Taycan',
    image: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn45pXnfZYovIS0rhO3RMFYTGAHYp9YK7%25oPUSbQ9rz8plxgI7mInQko6uJFcLzuW1jpJiNmVbaZBcseh0mtdTZtAHg8D2Y1JKlEnKROBSp9ysr0dMZ4viACDkt%25X9ltnL8W64w9yIEVRV4kv39h7kKXXj4AU3gV6a%25JsewiRmWBi1%25I7gVdcGAPUlhDfrKHspAnPe07iZJyNEDv39h7mKCXj4AUg9x6a0LDpUuBLTugFx6xDDx7Jv5mb3%25ZpjsLF',
    specs: {
      capacity: '2+2',
      weight: '2,295 kg',
      engine: 'Electric Motor (616 hp)',
      topSpeed: '250 km/h',
      acceleration: '5.1 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
  {
    name: 'Panamera',
    image: 'https://configurator.porsche.com/model-start/pictures/YAAFH1/extcam01.webp',
    specs: {
      capacity: '4',
      weight: '1,975 kg',
      engine: '2.9L V6 Twin-Turbo',
      topSpeed: '270 km/h',
      acceleration: '4.0 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
  {
    name: 'Cayman',
    image: 'https://vehicle-images.dealerinspire.com/stock-images/porsche/d914c0d6d5d9290b6f425cb8bf5f883e.jpg',
    specs: {
      capacity: '2',
      weight: '1,500 kg',
      engine: '4.0L Flat-6',
      topSpeed: '290 km/h',
      acceleration: '3.9 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
  {
    name: 'Macan',
    image: 'https://www.motortrend.com/uploads/sites/10/2019/11/2020-porsche-macan-4wd-suv-angular-front.png',
    specs: {
      capacity: '5',
      weight: '2,000 kg',
      engine: '2.0L Turbocharged 4-Cylinder',
      topSpeed: '232 km/h',
      acceleration: '6.4 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
  {
    name: 'Porsche Boxster',
    image: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn45pXnfZYovIS0rhO3RMFYTGAHYp9YK7%25oPUSbQ9rz8plxgI7mInQko6uJFcLzuW1jpJnfGVbaZBOLSh0mtd0NtAHg8DHgEGkaWDtJ9rLmVn9b4wIghaeo%25x3lAmzDW1jpJgGpVbaZBlrgh0mtdxqwAHg8D0gSJKlEnHgqBSp9yc74wIghEeg%25x3lAnqYW1TG8KA6ZGi601MemFctLgRYPTHrG2E2',
    specs: {
      capacity: '2',
      weight: '1,300 kg',
      engine: '2.5L 4-Cylinder Turbo',
      topSpeed: '275 km/h',
      acceleration: '4.9 s (0-100 km/h)',
      capacityLogo: 'https://static.vecteezy.com/system/resources/thumbnails/046/857/288/small/generated-ai-car-seat-on-transparent-background-free-png.png',
      weightLogo: 'https://static.thenounproject.com/png/416263-200.png',
      engineLogo: 'https://static.thenounproject.com/png/10760-200.png',
      topSpeedLogo: 'https://cdn-icons-png.flaticon.com/512/53/53128.png',
      accelerationLogo: 'https://cdn-icons-png.flaticon.com/512/49/49203.png',
    },
  },
]

export default function ModelsGallery() {
  const [hoveredModel, setHoveredModel] = useState(null)
  const [selectedModel, setSelectedModel] = useState(null)
  const modelRef = useRef(null)

  const handleModelClick = (model) => {
    setSelectedModel(model)
    if (modelRef.current) {
      modelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleBackClick = () => {
    setSelectedModel(null)
  }

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 min-h-full flex flex-col justify-center items-center">
        {selectedModel ? (
          <motion.div
            ref={modelRef}
            className="relative flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-96 h-96 rounded-lg overflow-hidden">
              <img
                src={selectedModel.image}
                alt={selectedModel.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {Object.entries(selectedModel.specs).map(([key, value], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={selectedModel.specs[`${key}Logo`]}
                    alt={key}
                    className="w-6 h-6"
                  />
                  <p>{value}</p>
                </motion.div>
              ))}
            </div>
            <button
              onClick={handleBackClick}
              className="absolute top-10 left-10 bg-white text-black p-4 rounded-lg shadow-lg"
            >
              Volver
            </button>
          </motion.div>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="text-4xl font-semibold mb-12 text-center"
            >
              Modelos de Porsche
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {models.map((model, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4"
                  onMouseEnter={() => setHoveredModel(model.name)}
                  onMouseLeave={() => setHoveredModel(null)}
                  onClick={() => handleModelClick(model)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    display: selectedModel && selectedModel.name !== model.name ? 'none' : 'block',
                  }}
                >
                  <div className="w-72 h-72 rounded-xl overflow-hidden mb-4">
                    <motion.img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                  <motion.h3
                    className="text-xl font-semibold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    {model.name}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

