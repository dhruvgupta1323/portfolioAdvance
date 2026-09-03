import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from 'react-icons/fa6'

function Contact({ revealVariants }) {
  const form = useRef()

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'dhruvgupta135790@gmail.com',
      link: 'mailto:dhruvgupta135790@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8852021323',
      link: 'tel:+918852021323',
    },
    {
      icon: FaLocationDot,
      label: 'Location',
      value: 'Alwar, Rajasthan, India',
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
      icon: FaTwitter,
      link: '#',
      label: 'Twitter',
    },
  ]

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_u626q3i',
        'template_5vnh1bb',
        form.current,
        '6F95lFdxbI0G2eaz0'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message')
        }
      )
  }

  return (
    <motion.div
      className="w-full px-6 md:px-12 lg:px-24 pt-24 pb-4 min-h-0 bg-white relative"
      id="contact"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Connect
            </h2>

            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              Let's build <br />
              something <span className="text-indigo-600">Great.</span>
            </h3>

            <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed max-w-md">
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-16">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>

                    <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50 transition-all"
                  whileHover={{ y: -5 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1">
            <div className="bg-slate-50 rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-sm">
              
              <form
                ref={form}
                className="space-y-6"
                onSubmit={sendEmail}
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="user_name"
                      placeholder="Dhruv Gupta"
                      required
                      className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="user_email"
                      placeholder="hello@example.com"
                      required
                      className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell me about your vision..."
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FaPaperPlane size={18} />
                </motion.button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact