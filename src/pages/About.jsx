import React from 'react'
import { motion } from 'framer-motion'
import { skills, skillBars } from '../data'

function About({ revealVariants, chipContainerVariants, chipVariants, prefersReducedMotion }) {
  return (
    <motion.div
      className="w-full px-6 md:px-12 lg:px-24 pt-24 pb-12 min-h-screen bg-white relative flex items-center"
      id="about"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Side: Story */}
          <div className="flex-1">
            <motion.div className="mb-12">
              <h2 className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-4">The Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Building the future with <br /><span className="text-indigo-600">Intelligence & Visual Art.</span>
              </h3>

              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  I am currently working as a Data Science Trainee at <strong className="text-slate-900">We RNS IT Solutions</strong> where I build machine learning
                  workflows from data preprocessing to model deployment.
                </p>
                <p>
                  Currently pursuing my B.Tech in CSE (AI/ML) at the University of Technology, Jaipur, I focus on the intersection of deep learning, computer vision, and production engineering.
                </p>
                <p>
                  Beyond engineering, I am deeply passionate about <strong className="text-slate-900">videography, video editing, and cinematic storytelling</strong>. Combining technical precision with creative visual direction allows me to craft compelling digital experiences that connect with audiences.
                </p>
              </div>
            </motion.div>

            {/* Experience Summary */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-slate-900 font-black text-2xl mb-1">02+</h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Years in Tech & Media</p>
              </div>
              <div>
                <h4 className="text-slate-900 font-black text-2xl mb-1">Jaipur, IN</h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Based In</p>
              </div>
            </div>
          </div>

          {/* Right Side: Skills */}
          <div className="flex-1">
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Core Tech & Creative Stack</h3>

              <motion.div
                className="flex flex-wrap gap-3 mb-12"
                variants={chipContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-default"
                    variants={chipVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <div className="space-y-8">
                {skillBars.map((s) => (
                  <div className="space-y-3" key={s.name}>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-bold text-sm">{s.name}</span>
                      <span className="text-indigo-600 font-black text-xs">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: prefersReducedMotion ? 0 : 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default About
