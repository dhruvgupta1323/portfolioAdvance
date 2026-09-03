import React from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data'
import Card3D from '../components/Card3D'
import { FaGraduationCap, FaBriefcase, FaDownload, FaClockRotateLeft } from 'react-icons/fa6'
import { sound } from '../utils/sound'

function Resume({ revealVariants }) {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
      id="resume"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <FaClockRotateLeft size={10} /> Chronological Matrix
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Experience & <br />
            <span className="text-gradient-cyan">Academic Trajectory</span>
          </h2>
        </div>

        <motion.a
          href="/Dhruv Gupta.pdf"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => sound.playHover()}
          className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-2xl font-mono text-xs font-bold tracking-wider flex items-center gap-3 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> DOWNLOAD RESUME [PDF]
        </motion.a>
      </div>

      {/* Cybernetic Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Glowing Laser Line */}
        <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent shadow-[0_0_10px_rgba(0,245,255,0.5)]"></div>

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
              {/* Timeline Beacon Icon */}
              <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-slate-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,245,255,0.4)]">
                {item.type === 'Degree' || item.type === 'Education' ? (
                  <FaGraduationCap className="text-sm md:text-base" />
                ) : (
                  <FaBriefcase className="text-sm md:text-base" />
                )}
              </div>

              {/* Timeline Card */}
              <Card3D glowColor="rgba(0, 245, 255, 0.2)" className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <span className="px-3 py-1 bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-mono font-bold w-fit">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    STATUS // {item.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-cyan-400 font-mono text-sm mb-4">
                  {item.org}
                </p>

                <ul className="space-y-2.5">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 shadow-[0_0_6px_#a855f7]"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
