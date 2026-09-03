import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'
import Card3D from '../components/Card3D'
import { FaGithub, FaArrowUpRightFromSquare, FaLayerGroup, FaFilter, FaVideo } from 'react-icons/fa6'
import { sound } from '../utils/sound'

const categories = ['All', 'AI / ML', 'Computer Vision', 'Full Stack', 'Video & Cinema']

function Projects({ revealVariants }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const handleFilterClick = (cat) => {
    sound.playClick()
    setActiveCategory(cat)
  }

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
      id="projects"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <FaLayerGroup size={10} /> Artifacts & Deployments
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Featured Systems & <br />
            <span className="text-gradient-cyan">Creative Portfolios</span>
          </h2>
        </div>

        <p className="text-slate-400 font-normal max-w-md text-sm md:text-base leading-relaxed">
          Production AI models, edge hardware computer vision, and cinematic motion edits engineered for performance.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              onMouseEnter={() => sound.playHover()}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider transition-all cursor-pointer relative ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card3D glowColor="rgba(0, 245, 255, 0.25)" className="p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Top Bar with Category & Links */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg w-fit">
                        {project.category}
                      </span>
                      {project.tag && (
                        <span className="text-[11px] font-mono text-slate-500 font-semibold">
                          // {project.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="View Source on GitHub"
                          onMouseEnter={() => sound.playHover()}
                          className="p-2.5 bg-slate-950/80 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="View Live Project"
                          onMouseEnter={() => sound.playHover()}
                          className="p-2.5 bg-slate-950/80 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-colors"
                        >
                          <FaArrowUpRightFromSquare size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 text-slate-300 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 pt-6 border-t border-slate-800/80">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0 shadow-[0_0_8px_#00f5ff]"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Card3D>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Projects
