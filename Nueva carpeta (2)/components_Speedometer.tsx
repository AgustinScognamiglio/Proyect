'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Speedometer() {
  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prevSpeed => {
        const newSpeed = prevSpeed + Math.random() * 10 - 5
        return Math.max(260, Math.min(300, newSpeed))
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const rotation = speed * 0.9 - 135 // -135 to 135 degrees

  return (
    <div className="w-64 h-64 relative mx-auto">
      <div className="w-full h-full rounded-full border-8 border-[#E5E7E9] flex items-center justify-center">
        <motion.div
          className="w-1 h-32 bg-[#FF3B30] absolute bottom-1/2 origin-bottom"
          style={{ rotate: rotation }}
        />
        <div className="text-3xl font-bold">{Math.round(speed)} km/h</div>
      </div>
      <div className="absolute top-full mt-4 text-center w-full">
        Velocímetro Interactivo
      </div>
    </div>
  )
}

