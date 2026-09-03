import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHouse, FaUser, FaFileLines, FaCode, FaAward, FaEnvelope, FaBars, FaXmark } from 'react-icons/fa6'

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

  // Smooth fast scroll function
  const handleNavClick = (e, sectionId, path) => {
    e.preventDefault()
    setIsOpen(false)

    const el = document.getElementById(sectionId)
    if (el) {
      const navOffset = 75
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      })
      window.history.pushState(null, '', path)
      setActiveSection(sectionId)
    }
  }

  // ScrollSpy & scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 200
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)

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
        <div className="nav-brand">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, 'home', '/')}
            className="cursor-pointer"
          >
            <motion.div
              className="logo-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DG<span className="dot">.</span>
            </motion.div>
          </a>
        </div>

        <div className="nav-desktop">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = activeSection === link.id

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.id, link.path)}
                className={`nav-link-v3 ${active ? 'active' : ''}`}
              >
                <motion.div
                  className="nav-link-content"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={18} className="nav-icon" />
                  <span>{link.name}</span>
                </motion.div>
                {active && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="active-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="nav-actions">
          <button
            className="mobile-toggle-v3"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

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
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              <div className="mobile-menu-header">
                <span className="menu-title">Navigation</span>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <FaXmark size={24} />
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
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.path}
                        className={`mobile-link ${active ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.id, link.path)}
                      >
                        <Icon size={20} />
                        <span>{link.name}</span>
                      </a>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mobile-menu-footer">
                <p>© {new Date().getFullYear()} DG Portfolio • AI & ML</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
