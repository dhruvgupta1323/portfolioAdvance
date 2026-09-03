import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { FaGithub, FaLink, FaLayerGroup } from 'react-icons/fa6'

function Projects({ revealVariants }) {
  return (
    <motion.div
      className="w-full px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-white relative"
      id="projects"
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Featured Projects & <br /> Case Studies
            </h3>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm mb-2">
            A collection of my work in AI, Computer Vision, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group relative bg-white border border-slate-100 rounded-[40px] overflow-hidden hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Card Header Color Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <FaLayerGroup size={20} />
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><FaGithub size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><FaLink size={20} /></a>
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[11px] font-black uppercase tracking-wider border border-slate-100 group-hover:bg-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 pt-6 border-t border-slate-50">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-500 font-bold">
                      <span className="mt-1 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

