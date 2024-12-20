'use client'

import { motion } from 'framer-motion'

export default function HistorySection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10 font-sans"
        >
          La Historia de Porsche
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <img 
              src="https://95octane.com/wp-content/uploads/2017/09/history_of_porsche_1.jpg" 
              alt="Porsche History" 
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Descubre nuestra historia</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg mb-4 border-l-4 border-red-600 pl-4">
              Desde su fundación en 1931 por Ferdinand Porsche, nuestra marca ha sido sinónimo de innovación y excelencia en la ingeniería automotriz.
            </p>
            <p className="text-lg border-l-4 border-red-600 pl-4">
              A lo largo de las décadas, Porsche ha creado algunos de los automóviles deportivos más icónicos y deseados del mundo, siempre manteniendo su compromiso con la calidad y el rendimiento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

