import React from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../data'
import Card3D from '../components/Card3D'
import { FaAward, FaBuildingColumns, FaCalendarDay, FaArrowUpRightFromSquare, FaCheck } from 'react-icons/fa6'
import { sound } from '../utils/sound'

function Certificates({ revealVariants }) {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
      id="certificates"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">
          <FaAward size={10} /> Verified Credentials
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Academic Honors & <br />
          <span className="text-gradient-cyan">Professional Certifications</span>
        </h2>
      </div>

      {/* Certificates 3D Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="h-full"
          >
            <Card3D glowColor="rgba(168, 85, 247, 0.25)" className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] shrink-0">
                    <FaAward size={26} />
                  </div>

                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[10px] font-bold uppercase rounded-lg flex items-center gap-1.5">
                      <FaBuildingColumns size={10} className="text-cyan-400" /> {cert.issuer}
                    </span>
                    <span className="px-3 py-1 bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-[10px] font-bold uppercase rounded-lg flex items-center gap-1.5">
                      <FaCalendarDay size={10} /> {cert.year}
                    </span>
                  </div>
                </div>

                {cert.badge && (
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">
                      // {cert.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-3">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cert.details}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <FaCheck size={12} />
                  <span>AUTHENTICATED</span>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-mono font-bold transition-all shadow-[0_0_10px_rgba(0,245,255,0.15)]"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <FaArrowUpRightFromSquare size={10} />
                  </a>
                )}
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Certificates
