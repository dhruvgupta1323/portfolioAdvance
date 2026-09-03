import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaMicrochip, FaCommentDots, FaShieldHalved, FaBolt, FaInstagram, FaVideo, FaFilm } from 'react-icons/fa6'
import avatar from '../assets/muji/avatar.png'

const iconMap = {
  'Computer Vision': FaMicrochip,
  'NLP Systems': FaCommentDots,
  'Production ML': FaBolt,
  'Privacy-First AI': FaShieldHalved,
  'Videography & Editing': FaVideo,
}

const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Certifications', value: '04' },
  { label: 'Experience', value: '02+' },
]

const roles = [
  "AI / ML Developer",
  "Video Editor & Filmmaker",
  "CSE Student",
  "Data Scientist",
  "Vision & Media Specialist"
]

function Home() {
  const [roleIndex, setRoleIndex] = React.useState(0)
  const [currentRole, setCurrentRole] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [speed, setSpeed] = React.useState(150)

  React.useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex % roles.length]
      setCurrentRole(
        isDeleting
          ? fullText.substring(0, currentRole.length - 1)
          : fullText.substring(0, currentRole.length + 1)
      )

      if (!isDeleting && currentRole === fullText) {
        setSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false)
        setRoleIndex(roleIndex + 1)
        setSpeed(150)
      } else {
        setSpeed(isDeleting ? 100 : 150)
      }
    }

    const timer = setTimeout(handleType, speed)
    return () => clearTimeout(timer)
  }, [currentRole, isDeleting, roleIndex, speed])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 75
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      window.history.pushState(null, '', `/${id === 'home' ? '' : id}`)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20" id="home">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <header className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-4 md:py-8">

          {/* Left Side: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-bold text-sm mb-6 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for new projects & creative collaborations
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 animate-shimmer">
                Dhruv Gupta
              </span>
            </h1>

            <div className="h-12 mb-6">
              <motion.div
                className="text-xl md:text-2xl font-bold text-slate-600 flex justify-center lg:justify-start items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span>{currentRole}</span>
                <span className="w-1 h-8 bg-purple-500 animate-pulse"></span>
              </motion.div>
            </div>

            <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-medium">
              Building intelligent, privacy-first AI solutions and crafting cinematic visual stories. Specialized in Computer Vision, Machine Learning, and Video Editing & Videography.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-purple-600 transition-all shadow-xl shadow-slate-200"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk <FaArrowRight />
              </motion.a>
              <motion.a
                href="/Dhruv Gupta.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold flex items-center gap-2 hover:border-purple-200 hover:bg-purple-50 transition-all"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV <FaDownload />
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Circular Image */}
          <motion.div
            className="flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Rings */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-purple-100 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-blue-100 animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

            <div className="relative z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              <motion.div
                className="w-full h-full rounded-full p-4 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-8 border-white overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={avatar}
                  alt="Dhruv Gupta"
                  loading="eager"
                  decoding="async"
                  width="380"
                  height="380"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Floating Icons around image */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 bg-white rounded-2xl shadow-xl border border-slate-50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaMicrochip className="text-purple-500 text-2xl" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 p-4 bg-white rounded-2xl shadow-xl border border-slate-50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <FaVideo className="text-indigo-500 text-2xl" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Social Links Bar */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-12 flex justify-center lg:justify-start gap-6 border-b border-slate-50">
        {[
          { icon: FaGithub, link: 'https://github.com/dhruvgupta1323', color: 'hover:text-black', name: 'GitHub' },
          { icon: FaLinkedin, link: 'https://linkedin.com/in/dhruv-gupta-885b9a317', color: 'hover:text-blue-600', name: 'LinkedIn' },
          { icon: FaInstagram, link: 'https://www.instagram.com/_.dhruv._.x/', color: 'hover:text-pink-600', name: 'Instagram' },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className={`text-slate-400 transition-all ${social.color}`}
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <social.icon size={24} />
          </motion.a>
        ))}
      </div>

      {/* Services Section (Core Competencies) */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20" id="services">
        <div className="text-center mb-16">
          <motion.h2
            className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Expertise
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Core Competencies & Creative Skills
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.title] || FaMicrochip
            return (
              <motion.div
                key={service.title}
                className="group bg-white hover:bg-slate-900 border border-slate-100 hover:border-slate-900 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div>
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
