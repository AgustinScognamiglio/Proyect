'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function GT3RSSection() {
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
    <section ref={containerRef} className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Nombre del modelo con baja opacidad */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-10 left-10 text-[8rem] font-bold text-gray-400 leading-none z-10"
      >
        911 GT3 RS
      </motion.h2>

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, scale }}
            className="relative"
            initial={{ x: "-100%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
              alt="911 GT3 RS"
              className="w-full h-auto"
            />
            
            {/* Indicador de potencia interactivo */}
            <motion.div
              className="absolute top-1/4 right-0 flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-[#FF3B30] rounded-full animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  525
                </div>
              </div>
              <span className="text-white text-sm">CV</span>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {/* Botón de especificaciones con efecto hover */}
            <motion.button
              className="group relative w-full overflow-hidden rounded-lg bg-transparent p-4 border border-[#FF3B30]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 w-0 bg-[#FF3B30] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <div className="relative text-[#FF3B30] group-hover:text-white text-left">
                <div className="text-xl font-bold mb-2">Aceleración</div>
                <div className="text-3xl font-bold">3.2s</div>
                <div className="text-sm">0-100 km/h</div>
              </div>
            </motion.button>

            {/* Gráfico de velocidad máxima */}
            <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="absolute h-full bg-gradient-to-r from-[#FF3B30] to-[#FFD700]"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4 text-white">
                <span className="font-bold">Velocidad Máxima</span>
                <span className="font-bold">296 km/h</span>
              </div>
            </div>

            {/* Indicador de aerodinámica */}
            <div className="relative p-6 bg-gray-900 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-white">Carga Aerodinámica</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="2">
                    <path d="M12 2L12 22M2 12L22 12" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
              <div className="mt-4 text-3xl font-bold text-[#FF3B30]">860 kg</div>
              <div className="text-gray-400">a 285 km/h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

