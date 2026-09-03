import React from 'react'
import { motion } from 'framer-motion'
import { skills, skillBars } from '../data'
import Card3D from '../components/Card3D'
import TextDecrypt from '../components/TextDecrypt'
import { FaCode, FaMicrochip, FaVideo, FaLocationDot, FaRocket, FaShieldHalved } from 'react-icons/fa6'
import { sound } from '../utils/sound'

function About({ revealVariants, prefersReducedMotion }) {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
      id="about"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">
          <FaRocket size={10} /> Origin & Capabilities
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Engineering Intelligence. <br />
          <span className="text-gradient-cyan">Directing Visual Art.</span>
        </h2>
      </div>

      {/* Bento Grid Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Story Card (7 Cols) */}
        <div className="lg:col-span-7 h-full">
          <Card3D glowColor="rgba(168, 85, 247, 0.25)" className="p-8 md:p-12 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 tracking-widest font-bold">
                  // BIOGRAPHY & PHILOSOPHY
                </span>
                <span className="text-xs font-mono text-slate-500">SYS_ID: DG-01</span>
              </div>

              <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  I am currently working as a <strong className="text-white font-semibold">Data Science Trainee at We RNS IT Solutions</strong>, engineering end-to-end machine learning workflows spanning data pipelines, statistical modeling, and low-latency API deployments.
                </p>
                <p>
                  Pursuing my B.Tech in <strong className="text-white font-semibold">Computer Science & Engineering (AI/ML)</strong> at the University of Technology, Jaipur, my technical focus centers on on-device machine intelligence, real-time computer vision inference, and privacy-preserving architectures.
                </p>
                <p>
                  In parallel, I immerse myself in <strong className="text-white font-semibold">videography, film editing, and cinematic pacing</strong>. Bridging mathematical algorithms with creative cinematography gives me an edge in designing digital interfaces and visual stories that captivate audiences.
                </p>
              </div>
            </div>

            {/* Quick Metrics Footer */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-800">
              <div>
                <span className="text-2xl md:text-3xl font-black text-white font-mono">02+</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Years Active</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-cyan-400 font-mono">Jaipur</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Base of Ops</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-purple-400 font-mono">100%</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Commitment</p>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Skills & Telemetry Matrix (5 Cols) */}
        <div className="lg:col-span-5 h-full flex flex-col gap-8">
          
          {/* Core Skill Chips */}
          <Card3D glowColor="rgba(0, 245, 255, 0.25)" className="p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
              <FaCode className="text-cyan-400" /> STACK_REGISTRY
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  onMouseEnter={() => sound.playHover()}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono font-semibold hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all cursor-default shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card3D>

          {/* Proficiency Bars */}
          <Card3D glowColor="rgba(59, 130, 246, 0.25)" className="p-8 flex-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
              <FaMicrochip className="text-blue-400" /> SYSTEM_PROFICIENCY
            </h3>

            <div className="space-y-6">
              {skillBars.map((s) => (
                <div key={s.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{s.name}</span>
                    <span className="text-cyan-400 font-bold">{s.level}%</span>
                  </div>

                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card3D>

        </div>

      </div>
    </motion.div>
  )
}

export default About
