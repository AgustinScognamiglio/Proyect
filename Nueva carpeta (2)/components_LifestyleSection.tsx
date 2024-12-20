'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const experiences = [
  {
    title: "Porsche Experience Center",
    description: "Descubre tus límites en nuestras pistas profesionales",
    image: "",
    stats: {
      tracks: 8,
      length: "5.2km",
      experiences: 12
    },
    color: "#FF3B30",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    )
  },
  {
    title: "Porsche Travel Experience",
    description: "Viajes exclusivos por las rutas más emocionantes del mundo",
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2019/company/Porsche-Travel-Experience/b-PTX19_00032_fine.jpg/jcr:content/b-PTX19_00032_fine.jpg",
    stats: {
      destinations: 15,
      routes: 25,
      days: 7
    },
    color: "#FFD700",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 12l4-4m-4 4l4 4"/>
      </svg>
    )
  },
  {
    title: "Porsche Club",
    description: "Forma parte de una comunidad exclusiva de entusiastas",
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Events/Porsche-Clubs/Gallery/B22_0706_fine.jpg/jcr:content/B22_0706_fine.jpg",
    stats: {
      members: "250k+",
      events: 100,
      clubs: 85
    },
    color: "#E5E7E9",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.33-8 8-8s8 4 8 8"/>
      </svg>
    )
  }
]

const ParticleEffect = ({ color }) => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  )
}

const InteractiveCard = ({ title, value, color }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative p-4 bg-white/10 rounded-lg backdrop-blur-sm overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        style={{ backgroundColor: color }}
      />
      
      <motion.div
        className="relative z-10"
        animate={{ scale: isHovered ? 1.1 : 1 }}
      >
        <div className="text-3xl font-bold" style={{ color }}>
          {value}
        </div>
        <div className="text-sm text-gray-300 capitalize mt-1">
          {title}
        </div>
      </motion.div>

      {isHovered && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ParticleEffect color={color} />
        </motion.div>
      )}
    </motion.div>
  )
}

export default function LifestyleSection() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Fondo dinámico con efecto parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${experiences[activeExperience].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-center text-black mb-4 font-sans">
            Estilo de Vida Porsche
          </h2>
          <p className="text-xl text-gray-300">
            Descubre experiencias únicas diseñadas para verdaderos entusiastas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Panel izquierdo - Experiencias */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeExperience === index 
                    ? 'bg-white/10 backdrop-blur-md' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveExperience(index)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {/* Barra de progreso animada */}
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full"
                  style={{ backgroundColor: exp.color }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeExperience === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-2 rounded-full"
                    style={{ color: exp.color }}
                    animate={{
                      rotate: activeExperience === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <AnimatePresence>
                  {activeExperience === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      {Object.entries(exp.stats).map(([key, value], statIndex) => (
                        <InteractiveCard
                          key={key}
                          title={key}
                          value={value}
                          color={exp.color}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Panel derecho - Visualización interactiva */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {experiences.map((exp, index) => (
                activeExperience === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Efecto de escaneo */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3B30]/10 to-transparent"
                      animate={{
                        y: ["100%", "-100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Líneas de conexión */}
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="100"
                        stroke={exp.color}
                        strokeWidth="2"
                        fill="none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      />
                    </svg>

                    {/* Partículas */}
                    <ParticleEffect color={exp.color} />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

