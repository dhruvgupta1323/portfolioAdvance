import React from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data'
import { FaGraduationCap, FaBriefcase, FaDownload, FaCircle } from 'react-icons/fa6'

function Resume({ revealVariants }) {
  return (
    <motion.div
      className="w-full px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-white relative"
      id="resume"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Decorative background elements for a premium feel */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-3">Professional Path</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Experience & <br /> Education
            </h3>
          </div>
          <motion.a
            href="/Dhruv Gupta.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Get Resume
          </motion.a>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - Refined with gradient */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-100 via-slate-100 to-indigo-100"></div>

          <div className="space-y-12">
            {resume.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-24"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-indigo-600 rounded-xl flex items-center justify-center z-10 shadow-sm transition-transform duration-500 hover:rotate-12">
                  {item.title.includes('B.Tech') || item.title.includes('Class') ? (
                    <FaGraduationCap className="text-indigo-600 text-sm md:text-base" />
                  ) : (
                    <FaBriefcase className="text-indigo-600 text-sm md:text-base" />
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 group">
                  {/* Period Badge */}
                  <div className="md:w-48 shrink-0">
                    <span className="inline-block px-4 py-1.5 bg-slate-50 text-slate-500 rounded-xl text-[11px] font-black uppercase tracking-widest border border-slate-100 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-all">
                      {item.period}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-12 border-b border-slate-50 group-last:border-none">
                    <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 font-bold text-sm mb-6 flex items-center gap-2">
                      <FaCircle size={6} className="text-indigo-300" /> {item.org}
                    </p>
                    <ul className="space-y-4">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-500 font-medium text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-200 rounded-full shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume


