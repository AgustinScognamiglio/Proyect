'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const initiatives = [
  {
    title: "Movilidad Eléctrica",
    description: "Liderando la revolución eléctrica con tecnología de vanguardia",
    stats: {
      reduction: "80%",
      investment: "€15B",
      models: "6+"
    },
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2019/products/taycan/Taycan-Turbo-S/b-P19_0653_a3_rgb.jpg/jcr:content/b-P19_0653_a3_rgb.jpg"
  },
  {
    title: "Producción Sostenible",
    description: "Fabricación neutra en carbono y economía circular",
    stats: {
      renewable: "100%",
      recycling: "95%",
      reduction: "75%"
    },
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2023/Sustainability/Themenseite-Bilder/b/TA21Q2IOX0003_low.jpeg/jcr:content/TA21Q2IOX0003_low.jpeg"
  },
  {
    title: "Innovación Verde",
    description: "Desarrollo de combustibles sintéticos y tecnologías limpias",
    stats: {
      investment: "€100M",
      partners: "25+",
      projects: "12"
    },
    image: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Company/Sustainability-Report-2021/Gallery/b-S22_0766_fine.jpg/jcr:content/b-S22_0766_fine.jpg"
  }
]

const timelineEvents = [
  { year: 2020, event: "Lanzamiento del Taycan 100% eléctrico" },
  { year: 2025, event: "80% de ventas en vehículos electrificados" },
  { year: 2030, event: "Neutralidad de carbono en toda la cadena de valor" }
]

const CountUpNumber = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: countRef,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.2) {
        const steps = 60
        const increment = end / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(current)
          }
        }, duration * 1000 / steps)
        return () => clearInterval(timer)
      }
    })
    return () => unsubscribe()
  }, [end, duration, scrollYProgress])

  return (
    <span ref={countRef}>
      {prefix}{Math.round(count)}{suffix}
    </span>
  )
}

const Card3D = ({ children }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10
    setRotateX(-rotateX)
    setRotateY(rotateY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className="relative w-full h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </motion.div>
  )
}

export default function SustainabilitySection() {
  const [activeInitiative, setActiveInitiative] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-green-950 to-black py-20">
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Compromiso con la Sostenibilidad
          </h2>
          <p className="text-xl text-green-300">
            Construyendo un futuro más limpio sin comprometer el rendimiento
          </p>
        </motion.div>

        {/* Iniciativas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <Card3D key={index}>
              <motion.div
                className="h-full bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-green-500/20"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{initiative.title}</h3>
                <p className="text-green-300 mb-6">{initiative.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(initiative.stats).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        <CountUpNumber end={parseInt(value) || 0} suffix={value.toString().replace(/[0-9]/g, '')} />
                      </div>
                      <div className="text-sm text-green-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>

        {/* Línea de tiempo */}
        <div className="relative py-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-500/20" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-1/2" />
              <motion.div
                className="absolute left-1/2 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"
                whileHover={{ scale: 1.5 }}
                whileInView={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 20px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
              <div className="w-1/2">
                <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">{event.year}</div>
                  <div className="text-green-300">{event.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gráfico circular interactivo */}
        <motion.div
          className="relative max-w-2xl mx-auto mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full transform -rotate-90">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#22c55e"
              strokeWidth="10"
              strokeDasharray="282.7433388230814"
              initial={{ strokeDashoffset: 282.7433388230814 }}
              whileInView={{ strokeDashoffset: 56.54866776461628 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <div className="text-4xl font-bold text-green-400">
                <CountUpNumber end={80} suffix="%" />
              </div>
              <div className="text-green-300">Reducción de emisiones</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

