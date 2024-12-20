'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isScrolledBeyond, setIsScrolledBeyond] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)  // Almacenar la última posición del scroll
  const [isInYellowSection, setIsInYellowSection] = useState(true)  // Verifica si está en la sección amarilla

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const yellowSection = document.getElementById('yellowSection')
      const yellowSectionRect = yellowSection.getBoundingClientRect()

      // Detecta si la sección amarilla está visible en la pantalla
      const isSectionInView = yellowSectionRect.top <= 0 && yellowSectionRect.bottom >= window.innerHeight
      setIsInYellowSection(isSectionInView)

      // Detecta si el usuario ha scrolleado hacia abajo o hacia arriba
      if (currentScrollY > lastScrollY) {
        // Hacia abajo
        setIsScrolledBeyond(true)
      } else {
        // Hacia arriba
        setIsScrolledBeyond(false)
      }

      // Actualiza la última posición del scroll
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY]) // Dependencia de lastScrollY para detectar cambios de scroll

  return (
    <section
      id="yellowSection"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#fde047' }} // Color sólido amarillo #fde047
    >
      {/* Imagen principal animada */}
      <motion.img
        src="https://wallpapers.com/images/hd/porsche-crest-logo-ptkalxgatwt8h21u-2.jpg"
        alt="Porsche"
        className="object-contain"
        style={{ position: 'fixed', zIndex: 50 }} // Fija la posición con prioridad visual alta
        animate={ 
          // Mueve la imagen solo si está en la sección amarilla y haciendo scroll hacia abajo
          isScrolledBeyond && isInYellowSection
            ? { top: '4rem', left: '4rem', scale: 0.094 } // Mueve la imagen a la esquina superior izquierda cuando se hace scroll hacia abajo
            : isInYellowSection // Si está en la sección amarilla, la imagen vuelve al centro al hacer scroll hacia arriba
            ? { top: '50%', left: '50%', translateX: '-50%', translateY: '-50%', scale: 0.3 } // Regresa al centro cuando se hace scroll hacia arriba en la zona amarilla
            : { top: '4rem', left: '4rem', scale: 0.094 } // Mantiene la imagen en la esquina si está fuera de la sección amarilla
        }
        initial={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
        transition={{
          duration: 0.4, // Transición rápida
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}

