'use client'

import { motion } from 'framer-motion'

export default function HeritageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10 font-sans"
        >
          Nuestro Legado
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Innovación Constante</h3>
            <p>Desde 1931, Porsche ha estado a la vanguardia de la innovación automotriz, estableciendo nuevos estándares en rendimiento y diseño.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Éxitos en Competición</h3>
            <p>Con más de 30,000 victorias en carreras, Porsche ha demostrado su supremacía en las pistas más exigentes del mundo.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Diseño Icónico</h3>
            <p>El diseño atemporal de Porsche ha creado algunos de los automóviles más reconocibles y deseados en la historia de la automoción.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

