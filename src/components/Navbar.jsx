import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaHouse,
  FaUser,
  FaFileLines,
  FaCode,
  FaAward,
  FaEnvelope,
  FaBars,
  FaXmark,
  FaVolumeHigh,
  FaVolumeXmark,
} from 'react-icons/fa6'
import { sound } from '../utils/sound'
import TextDecrypt from './TextDecrypt'

const navLinks = [
  { name: 'Home', id: 'home', path: '/', icon: FaHouse },
  { name: 'About', id: 'about', path: '/about', icon: FaUser },
  { name: 'Resume', id: 'resume', path: '/resume', icon: FaFileLines },
  { name: 'Projects', id: 'projects', path: '/projects', icon: FaCode },
  { name: 'Certificates', id: 'certificates', path: '/certificates', icon: FaAward },
  { name: 'Contact', id: 'contact', path: '/contact', icon: FaEnvelope },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isAudioActive, setIsAudioActive] = useState(false)

  const toggleSound = () => {
    const newState = sound.toggle()
    setIsAudioActive(newState)
  }

  // Smooth fast scroll function with audio trigger
  const handleNavClick = (e, sectionId, path) => {
    e.preventDefault()
    sound.playClick()
    setIsOpen(false)

    const el = document.getElementById(sectionId)
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      })
      window.history.pushState(null, '', path)
      setActiveSection(sectionId)
    }
  }

  // ScrollSpy & scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 220
      const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glass">
        {/* Brand */}
        <div className="nav-brand">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, 'home', '/')}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="logo-wrapper">
              <span className="text-white font-black text-lg">DG</span>
              <span className="text-cyan-400 font-bold">.</span>
            </div>
            <span className="brand-badge hidden sm:inline-block">
              <TextDecrypt text="AI_SYS//v3.4" hoverTrigger={true} />
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = activeSection === link.id

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.id, link.path)}
                onMouseEnter={() => sound.playHover()}
                className={`nav-link-v3 ${active ? 'active' : ''}`}
              >
                <motion.div
                  className="nav-link-content"
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon size={14} className={active ? 'text-cyan-400' : 'text-slate-400'} />
                  <span>{link.name}</span>
                </motion.div>
                {active && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="active-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Right HUD Controls */}
        <div className="nav-actions">
          {/* Audio HUD Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Audio UI"
            className={`sound-toggle-btn ${isAudioActive ? 'active' : ''}`}
            title={isAudioActive ? 'Sound FX Enabled' : 'Enable Sound FX'}
          >
            {isAudioActive ? <FaVolumeHigh size={12} /> : <FaVolumeXmark size={12} />}
            <span className="hidden sm:inline">{isAudioActive ? 'AUDIO ON' : 'AUDIO OFF'}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-toggle-v3"
            onClick={() => {
              sound.playClick()
              setIsOpen(!isOpen)
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu-v3"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="mobile-menu-header">
                <div>
                  <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
                    System Navigation
                  </span>
                  <p className="text-[10px] text-slate-500 font-mono">DHRUV GUPTA // AI_CORE</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <FaXmark size={20} />
                </button>
              </div>

              <div className="mobile-links">
                {navLinks.map((link, i) => {
                  const Icon = link.icon
                  const active = activeSection === link.id

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <a
                        href={link.path}
                        className={`mobile-link ${active ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.id, link.path)}
                      >
                        <Icon size={18} className={active ? 'text-cyan-400' : 'text-slate-400'} />
                        <span>{link.name}</span>
                      </a>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>STATUS: NOMINAL</span>
                  <span className="text-cyan-400">© 2026 DG</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
