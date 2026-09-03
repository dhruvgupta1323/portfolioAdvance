import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import ParticleCanvas from './components/ParticleCanvas'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

function MainSections({ sharedProps }) {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '')
    if (path) {
      const el = document.getElementById(path)
      if (el) {
        const navOffset = 80
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className="main-scroll-container">
      <Home {...sharedProps} />
      <About {...sharedProps} />
      <Resume {...sharedProps} />
      <Projects {...sharedProps} />
      <Certificates {...sharedProps} />
      <Contact {...sharedProps} />
      <Footer />
    </div>
  )
}

function App() {
  const prefersReducedMotion = useReducedMotion()

  const dur = prefersReducedMotion ? 0 : 0.6
  const durFast = prefersReducedMotion ? 0 : 0.3

  const revealVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return
    const x = e.clientX
    const y = e.clientY
    document.documentElement.style.setProperty('--spot-x', `${x}px`)
    document.documentElement.style.setProperty('--spot-y', `${y}px`)
  }

  const sharedProps = {
    durFast,
    revealVariants,
    prefersReducedMotion,
  }

  return (
    <Router>
      <div className="page" onMouseMove={handleMouseMove}>
        {/* Glowing Trailing Halo Custom Cursor */}
        <CustomCursor />

        {/* Top Scroll Progress Loadbar & Initial Load Indicator */}
        <ScrollProgress />

        {/* Interactive Cosmic Particle Canvas Simulation */}
        <ParticleCanvas />

        {/* Atmospheric Ambient Gradient Orbs */}
        <div className="bg" aria-hidden="true">
          <motion.div
            className="orb orb1"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, 30, 0], y: [0, -20, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="orb orb2"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, -30, 0], y: [0, 20, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="orb orb3"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, 20, 0], y: [0, 25, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* HUD Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="content-area">
          <MainSections sharedProps={sharedProps} />
        </main>

        {/* Floating Quick-Scroll Button */}
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
