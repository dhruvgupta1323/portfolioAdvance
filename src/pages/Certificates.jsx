import React from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../data'
import { FaAward, FaBuildingColumns, FaCalendarDay } from 'react-icons/fa6'

function Certificates({ revealVariants }) {
  return (
    <motion.div
      className="w-full px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-white relative"
      id="certificates"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-3">Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Academic & Professional <br /> Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, i) => (
            <motion.article
              key={i}
              className="group relative bg-white border-2 border-dashed border-slate-100 rounded-[40px] p-8 md:p-12 transition-all duration-500 hover:border-indigo-500 hover:bg-slate-50 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <FaAward size={40} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <FaBuildingColumns size={10} /> {cert.issuer}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                      <FaCalendarDay size={10} /> {cert.year}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {cert.details}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaAward size={100} className="text-slate-900" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Certificates

