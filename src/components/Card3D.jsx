import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { sound } from '../utils/sound'

export default function Card3D({ children, className = '', glowColor = 'rgba(0, 245, 255, 0.15)', onClick }) {
  const cardRef = useRef(null)
  const [rotX, setRotX] = useState(0)
  const [rotY, setRotY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Calculate rotation (-10deg to 10deg)
    const rY = ((mouseX - width / 2) / (width / 2)) * 8
    const rX = -((mouseY - height / 2) / (height / 2)) * 8

    setRotX(rX)
    setRotY(rY)
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.25,
    })
  }

  const handleMouseEnter = () => {
    sound.playHover()
  }

  const handleMouseLeave = () => {
    setRotX(0)
    setRotY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative h-full w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX: rotX,
          rotateY: rotY,
          scale: rotX !== 0 || rotY !== 0 ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={`relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-500/50 hover:shadow-[0_20px_60px_-15px_rgba(0,245,255,0.15)] ${className}`}
      >
        {/* Specular Glint Reflection */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
          }}
        />

        {/* Ambient Color Flare */}
        <div
          className="pointer-events-none absolute -inset-1 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
          }}
        />

        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
