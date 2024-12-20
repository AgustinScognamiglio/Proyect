'use client'

import { motion } from 'framer-motion'

export default function DrivingExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10 font-sans"
        >
          La Experiencia de Conducción Porsche
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src="https://hips.hearstapps.com/hmg-prod/images/img-3-6655e9b91dcf6.jpg?crop=1.00xw:1.00xh;0,0" alt="Porsche Driving Experience" className="rounded-lg shadow-lg border-4 border-[#FF3B30]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">Siente la Emoción</h3>
            <p className="text-lg mb-4">
              Cada Porsche está diseñado para ofrecer una experiencia de conducción incomparable. Desde la respuesta precisa del volante hasta la potencia del motor, cada aspecto está cuidadosamente afinado para maximizar el placer de conducir.
            </p>
            <p className="text-lg mb-6">
              Descubre la adrenalina de conducir un Porsche en nuestros eventos de conducción y en pista, donde podrás llevar tus habilidades al límite bajo la guía de instructores expertos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#FF3B30] text-white rounded-full hover:bg-[#FFD700] transition duration-300 border-2 border-[#FF3B30] hover:border-[#FFD700]"
            >
              Reserva tu Experiencia
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

