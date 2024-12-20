'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function CarreraGTSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ x: 0, opacity: 1 })
  }, [controls])

  return (
    <section ref={containerRef} className="min-h-screen bg-zinc-900 relative overflow-hidden flex items-center">
      {/* Nombre del modelo con baja opacidad */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-10 left-10 text-[8rem] font-bold text-gray-400 leading-none z-10"
      >
        Carrera GT
      </motion.h2>

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, scale }}
            className="relative"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Imagen del auto */}
            <div className="relative">
              <motion.img
                src="https://images-porsche.imgix.net/-/media/E969499404154DB79BAD58EF5CC8CFAB_82BBE0A2462E47C4B1DB34EA0B23B853_CZ25W12IX0010-911-carrera-gts-side?w=2560&h=697&q=45&crop=faces%2Centropy%2Cedges&auto=format"
                alt="Carrera GT"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Motor V10 */}
            <motion.button
              className="group relative w-full overflow-hidden rounded-lg bg-transparent p-4 border border-[#E5E7E9]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 w-0 bg-[#E5E7E9] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <div className="relative text-[#E5E7E9] group-hover:text-black text-left">
                <div className="text-xl font-bold mb-2">Motor</div>
                <div className="text-3xl font-bold">V10 5.7L</div>
                <div className="text-sm">Aspiración natural</div>
              </div>
            </motion.button>

            {/* Gráfico de velocidad */}
            <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="absolute h-full bg-gradient-to-r from-[#E5E7E9] to-[#FF3B30]"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4 text-white">
                <span className="font-bold">Velocidad Máxima</span>
                <span className="font-bold">330 km/h</span>
              </div>
            </div>

            {/* Indicador de peso */}
            <div className="relative p-6 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-white">Peso en vacío</span>
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8"
                >
                  <svg viewBox="0 0 24 24" fill="#E5E7E9">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </motion.div>
              </div>
              <div className="mt-4 text-3xl font-bold text-[#E5E7E9]">1.380 kg</div>
              <div className="text-gray-400">Construcción ultraligera</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

