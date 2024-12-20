'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-10 font-sans"
        >
          Contacta con Nosotros
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">Encuentra tu Concesionario</h3>
            <p className="text-lg mb-6">
              Localiza el concesionario Porsche más cercano y descubre nuestra gama de vehículos en persona.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#FF3B30] text-white rounded-full hover:bg-[#FFD700] transition duration-300 border-2 border-[#FF3B30] hover:border-[#FFD700]"
            >
              Buscar Concesionarios
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">Solicita Información</h3>
            <form className="space-y-4">
              <motion.input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#E5E7E9] focus:border-[#FF3B30] focus:outline-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#E5E7E9] focus:border-[#FF3B30] focus:outline-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#E5E7E9] focus:border-[#FF3B30] focus:outline-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#FF3B30] text-white rounded-full hover:bg-[#FFD700] transition duration-300 border-2 border-[#FF3B30] hover:border-[#FFD700]"
              >
                Enviar
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

