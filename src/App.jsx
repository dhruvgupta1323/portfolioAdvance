import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
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
        const navOffset = 75
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const heroTitleVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: dur, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const chipContainerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
  }

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 6 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: durFast, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--spot-x', `${x}px`)
    e.currentTarget.style.setProperty('--spot-y', `${y}px`)
  }

  const sharedProps = {
    durFast,
    revealVariants,
    heroTitleVariants,
    chipContainerVariants,
    chipVariants,
    prefersReducedMotion,
  }

  return (
    <Router>
      <div className="page" onMouseMove={handleMouseMove}>
        {/* Top Scroll Progress Loadbar & Initial Load Indicator */}
        <ScrollProgress />

        {/* Ambient Animated Gradient Orbs */}
        <div className="bg" aria-hidden="true">
          <motion.div
            className="orb orb1"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, 20, 0], y: [0, -15, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="orb orb2"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, -20, 0], y: [0, 10, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="orb orb3"
            animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: [0, 15, 0], y: [0, 15, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="content-area">
          <MainSections sharedProps={sharedProps} />
        </main>

        {/* Fast Floating Scroll-To-Top Button */}
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
