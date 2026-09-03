import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data'
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMicrochip,
  FaCommentDots,
  FaShieldHalved,
  FaBolt,
  FaInstagram,
  FaVideo,
  FaCircleDot,
  FaTerminal,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import avatar from '../assets/muji/avatar.png'
import Card3D from '../components/Card3D'
import TextDecrypt from '../components/TextDecrypt'
import { sound } from '../utils/sound'

const iconMap = {
  'Computer Vision & Edge AI': FaMicrochip,
  'Production ML & FastAPI': FaBolt,
  'Videography & Cinematic Editing': FaVideo,
  'NLP & Intent Classification': FaCommentDots,
  'Privacy-First Architecture': FaShieldHalved,
}

const stats = [
  { label: 'Projects Completed', value: '12+', sub: 'Production & Edge' },
  { label: 'Certifications', value: '04', sub: 'IIT & Stanford ML' },
  { label: 'Experience', value: '02+', sub: 'Data Science & AI' },
]

const roles = [
  "AI / ML Developer",
  "CSE Student",
  "Data Scientist",
  "Vision Specialist"
]

function Home() {
  const [roleIndex, setRoleIndex] = React.useState(0)
  const [currentRole, setCurrentRole] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [speed, setSpeed] = React.useState(140)

  React.useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex % roles.length]
      setCurrentRole(
        isDeleting
          ? fullText.substring(0, currentRole.length - 1)
          : fullText.substring(0, currentRole.length + 1)
      )

      if (!isDeleting && currentRole === fullText) {
        setSpeed(2200)
        setIsDeleting(true)
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false)
        setRoleIndex(roleIndex + 1)
        setSpeed(140)
      } else {
        setSpeed(isDeleting ? 80 : 140)
      }
    }

    const timer = setTimeout(handleType, speed)
    return () => clearTimeout(timer)
  }, [currentRole, isDeleting, roleIndex, speed])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    sound.playClick()
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      window.history.pushState(null, '', `/${id === 'home' ? '' : id}`)
    }
  }

  return (
    <div className="w-full relative pt-24 pb-16 overflow-hidden" id="home">
      {/* Hero Header Section */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-8 md:py-16">
          
          {/* Left Text Terminal */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* System Status Pill */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-8 shadow-[0_0_20px_rgba(0,245,255,0.15)] backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="tracking-wider">SYSTEM STATUS: ONLINE // AVAILABLE FOR VENTURES</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 tracking-tight">
              Hello, I'm <br />
              <span className="text-gradient-aurora animate-shimmer">
                Dhruv Gupta
              </span>
            </h1>

            {/* Cyber Typewriter Role HUD */}
            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <div className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-cyan-400 font-mono text-lg md:text-xl font-bold flex items-center gap-2 backdrop-blur-sm">
                <FaTerminal size={14} className="text-purple-400" />
                <span>{currentRole}</span>
                <span className="w-1.5 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            {/* Sub-headline / Mission */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
              Building intelligent, privacy-first AI solutions. Specialized in Computer Vision, NLP, and Production-ready ML systems that solve real-world problems.
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                onMouseEnter={() => sound.playHover()}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-2xl font-bold font-mono text-sm tracking-wide flex items-center gap-3 shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:shadow-[0_0_35px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                INITIALIZE CONTACT <FaArrowRight />
              </motion.a>
              
              <motion.a
                href="/Dhruv Gupta.pdf"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-2xl font-bold font-mono text-sm tracking-wide flex items-center gap-3 hover:border-cyan-400/50 transition-all backdrop-blur-md"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload /> GET RESUME [PDF]
              </motion.a>
            </div>

            {/* Live Stats Telemetry Matrix */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col p-3 rounded-xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-xs">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-300 mt-0.5">{stat.label}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{stat.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Holographic 3D Avatar Matrix */}
          <motion.div
            className="flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Laser Orbital Rings */}
            <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-cyan-500/20 animate-[spin_24s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[310px] h-[310px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-purple-500/30 animate-[spin_18s_linear_infinite_reverse] pointer-events-none"></div>
            <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-blue-500/20 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none"></div>

            <div className="relative z-10 w-[290px] h-[290px] md:w-[380px] md:h-[380px]">
              <Card3D glowColor="rgba(0, 245, 255, 0.35)" className="p-3 border-2 border-cyan-500/30 bg-slate-950/80">
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <img
                    src={avatar}
                    alt="Dhruv Gupta"
                    loading="eager"
                    decoding="async"
                    width="380"
                    height="380"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 filter brightness-105 contrast-105"
                  />
                  {/* Holographic Cyan Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-purple-900/20 opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Hologram Corner Markers */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
              </Card3D>

              {/* Floating Holographic Telemetry Badges */}
              <motion.div
                className="absolute -top-4 -right-4 p-3.5 bg-slate-900/90 rounded-2xl shadow-[0_0_20px_rgba(0,245,255,0.2)] border border-cyan-500/40 backdrop-blur-md flex items-center gap-2.5 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaMicrochip className="text-cyan-400 text-xl" />
                <span className="text-[11px] font-mono font-bold text-white tracking-wider">AI_VISION</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-4 p-3.5 bg-slate-900/90 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.2)] border border-purple-500/40 backdrop-blur-md flex items-center gap-2.5 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <FaVideo className="text-purple-400 text-xl" />
                <span className="text-[11px] font-mono font-bold text-white tracking-wider">CINEMA_FX</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Social Telemetry Band */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap justify-center lg:justify-between items-center gap-6 border-y border-slate-800/60 my-8">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <FaCircleDot className="text-cyan-400 text-[8px] animate-ping" />
          <span>CONNECTED PLATFORMS & REPOSITORIES:</span>
        </div>

        <div className="flex gap-4">
          {[
            { icon: FaGithub, link: 'https://github.com/dhruvgupta1323', name: 'GitHub', color: 'hover:text-cyan-400 hover:border-cyan-500/50' },
            { icon: FaLinkedin, link: 'https://linkedin.com/in/dhruv-gupta-885b9a317', name: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/50' },
            { icon: FaInstagram, link: 'https://www.instagram.com/_.dhruv._.x/', name: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/50' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              onMouseEnter={() => sound.playHover()}
              className={`p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 transition-all backdrop-blur-md ${social.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Core Systems Bento Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20" id="services">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaWandMagicSparkles size={10} /> Architecture & Domains
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Core Competencies & Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.title] || FaMicrochip
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="h-full"
              >
                <Card3D glowColor="rgba(0, 245, 255, 0.2)" className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                        {service.id}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>DOMAIN_OPERATIONAL</span>
                    <span className="text-cyan-400">● VERIFIED</span>
                  </div>
                </Card3D>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
