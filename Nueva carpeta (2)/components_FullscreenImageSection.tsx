'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function FullscreenImageSection() {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  const [isCentered, setIsCentered] = useState(false)

  const handleScroll = () => {
    if (!sectionRef.current || isCentered) return

    const elementTop = sectionRef.current.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    const scrollProgress = 1 - elementTop / windowHeight

    if (scrollProgress >= 0.5) {
      // Cuando el auto esté centrado, detén el movimiento
      controls.start({
        x: '0%',
        transition: { type: 'spring', stiffness: 50, damping: 20 },
      })
      setIsCentered(true)
    } else {
      controls.start({
        x: `${(1 - scrollProgress) * -100}%`, // Mover hasta el centro
        transition: { type: 'spring', stiffness: 50, damping: 20 },
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCentered])

  return (
    <motion.section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden relative"
    >
      <motion.img
        src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
        alt="Porsche 911 GT3 RS"
        className="absolute top-0 left-0"
        style={{
          width: 'auto',
          height: '100%',
          objectFit: 'contain',
        }}
        animate={controls}
        initial={{ x: '-100%' }}
      />
    </motion.section>
  )
}

