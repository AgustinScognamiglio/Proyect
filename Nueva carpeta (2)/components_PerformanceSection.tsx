'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LogoPresentation() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      {/* Presentación sobre el Diseño del Logo de Porsche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl font-bold text-center mb-10"
          >
            El Diseño del Logo de Porsche
          </motion.h2>
          
          <motion.div
            className="flex justify-center mb-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <img
              src="https://wallpapers.com/images/hd/porsche-crest-logo-ptkalxgatwt8h21u-2.jpg"
              alt="Logo Porsche"
              className="w-48 h-48 object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-center mb-6"
          >
            El logo de Porsche es uno de los símbolos más icónicos en el mundo del automovilismo y representa la
            prestigiosa tradición de la marca. Cada elemento de su diseño tiene un significado profundo, desde los colores
            hasta los símbolos que representan la ciudad de Stuttgart y la herencia alemana de Porsche.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold mb-4">Historia del Logo</h3>
              <p className="text-lg mb-4">
                El logo de Porsche fue diseñado en 1952 y ha experimentado pocas modificaciones desde su creación. Está
                compuesto por un escudo que simboliza la ciudad de Stuttgart, hogar de Porsche, con elementos
                heráldicos que hacen referencia a la tradición y el poder. La combinación de los colores negro, dorado y
                rojo es un reflejo de la elegancia y el rendimiento que caracteriza a los autos de Porsche.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg mb-4"
            >
              El logo de Porsche incorpora varios elementos simbólicos:
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="list-disc pl-6 mb-4"
            >
              <li><strong>El Escudo:</strong> Representa la herencia de Stuttgart, que tiene un escudo de armas con un caballo como símbolo principal.</li>
              <li><strong>El Caballo:</strong> Simboliza la velocidad y el rendimiento, aspectos clave en la filosofía de Porsche.</li>
              <li><strong>Los Colores:</strong> El negro representa la solidez y la tradición, el dorado la excelencia y el rojo la pasión.</li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Sección sobre la Evolución del Logo */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="text-4xl font-bold text-center mb-10"
          >
            Evolución del Logo de Porsche
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-center mb-6"
          >
            A lo largo de los años, el logo de Porsche ha experimentado ligeros ajustes, pero ha mantenido su esencia
            intacta. La evolución del logo refleja la evolución de la marca, desde un fabricante de autos deportivos de
            lujo hasta un símbolo global de innovación y rendimiento.
          </motion.p>

          <div className="flex justify-center gap-10">
            <motion.img
              src="https://loodibee.com/wp-content/uploads/Porsche-Logo-1952-1963.png"
              alt="Logo Porsche 1963"
              className="w-36 h-36 object-contain"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            />
            <motion.img
              src="https://wallpapers.com/images/hd/porsche-crest-logo-ptkalxgatwt8h21u-2.jpg"
              alt="Logo Porsche 2023"
              className="w-36 h-36 object-contain"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

