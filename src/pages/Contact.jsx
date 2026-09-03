import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Card3D from '../components/Card3D'
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaTerminal,
  FaCheck,
  FaTriangleExclamation,
} from 'react-icons/fa6'
import { sound } from '../utils/sound'

function Contact({ revealVariants }) {
  const form = useRef()
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'TRANSMISSION // EMAIL',
      value: 'dhruvgupta135790@gmail.com',
      link: 'mailto:dhruvgupta135790@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'VOICE // TELEMETRY',
      value: '+91 8852021323',
      link: 'tel:+918852021323',
    },
    {
      icon: FaLocationDot,
      label: 'GEOLOCATION',
      value: 'Alwar / Jaipur, Rajasthan, India',
      link: '#',
    },
  ]

  const socials = [
    {
      icon: FaGithub,
      link: 'https://github.com/dhruvgupta1323',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      link: 'https://linkedin.com/in/dhruv-gupta-885b9a317',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      link: 'https://www.instagram.com/_.dhruv._.x/',
      label: 'Instagram',
    },
  ]

  const sendEmail = (e) => {
    e.preventDefault()
    sound.playClick()
    setStatus({ state: 'sending', message: 'TRANSMITTING PACKETS...' })

    emailjs
      .sendForm(
        'service_u626q3i',
        'template_5vnh1bb',
        form.current,
        '6F95lFdxbI0G2eaz0'
      )
      .then(
        () => {
          setStatus({ state: 'success', message: 'TRANSMISSION CONFIRMED // MESSAGE SENT' })
          form.current.reset()
          setTimeout(() => setStatus({ state: 'idle', message: '' }), 6000)
        },
        (error) => {
          console.error(error.text)
          setStatus({ state: 'error', message: 'DISPATCH FAILURE // PLEASE RETRY OR EMAIL DIRECTLY' })
          setTimeout(() => setStatus({ state: 'idle', message: '' }), 6000)
        }
      )
  }

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
      id="contact"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">
          <FaTerminal size={10} /> Transmission Console
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Initialize Communication. <br />
          <span className="text-gradient-cyan">Build Something Extraordinary.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              Open for machine learning engineering collaborations, custom computer vision deployments, and cinematic visual productions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <Card3D key={i} glowColor="rgba(0, 245, 255, 0.2)" className="p-5">
                  <a
                    href={item.link}
                    onMouseEnter={() => sound.playHover()}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,245,255,0.2)] group-hover:scale-105 transition-transform">
                      <item.icon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card3D>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">
              // DIRECT NETWORK CHANNELS
            </span>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onMouseEnter={() => sound.playHover()}
                  className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all backdrop-blur-md"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Form (7 cols) */}
        <div className="lg:col-span-7">
          <Card3D glowColor="rgba(168, 85, 247, 0.25)" className="p-8 md:p-12">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <span className="font-mono text-xs text-purple-400 font-bold tracking-wider">
                TRANSMISSION_FORM // ENCRYPTED
              </span>
              <span className="font-mono text-xs text-slate-500">256-BIT SSL</span>
            </div>

            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                    OPERATOR NAME
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="e.g. Satoshi Nakamoto"
                    required
                    onFocus={() => sound.playHover()}
                    className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                    TRANSMISSION ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="operator@domain.com"
                    required
                    onFocus={() => sound.playHover()}
                    className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                  TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="AI Model Deployment / Video Production Collaboration"
                  required
                  onFocus={() => sound.playHover()}
                  className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                  PAYLOAD / MESSAGE
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Detail your requirements, project scope, or vision..."
                  required
                  onFocus={() => sound.playHover()}
                  className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {status.state !== 'idle' && (
                <div
                  className={`p-3.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 ${
                    status.state === 'success'
                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                      : status.state === 'error'
                      ? 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                      : 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30'
                  }`}
                >
                  {status.state === 'success' ? (
                    <FaCheck />
                  ) : status.state === 'error' ? (
                    <FaTriangleExclamation />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status.state === 'sending'}
                onMouseEnter={() => sound.playHover()}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:shadow-[0_0_35px_rgba(0,245,255,0.5)] transition-all cursor-pointer disabled:opacity-50"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                DISPATCH TRANSMISSION <FaPaperPlane size={14} />
              </motion.button>
            </form>
          </Card3D>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact