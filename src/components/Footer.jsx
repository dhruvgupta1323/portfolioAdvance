import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCircle } from 'react-icons/fa6'
import { sound } from '../utils/sound'
import TextDecrypt from './TextDecrypt'

function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl relative z-10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Mission */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-white font-black text-xl tracking-tight">DHRUV GUPTA</span>
            <span className="text-cyan-400 font-bold">.</span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded ml-2">
              <TextDecrypt text="SYSTEM_v3.4" />
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500">
            ENGINEERING ON-DEVICE INTELLIGENCE // DIRECTING VISUAL NARRATIVES
          </p>
        </div>

        {/* Telemetry & Coordinates */}
        <div className="flex flex-col items-center md:items-end text-xs font-mono text-slate-400 space-y-1">
          <div className="flex items-center gap-2">
            <FaCircle size={6} className="text-emerald-400 animate-pulse" />
            <span className="text-slate-300">ALL SYSTEMS NOMINAL</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} DHRUV GUPTA • DESIGNED WITH HIGH-PERFORMANCE WEB TECH
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/dhruvgupta1323"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/dhruv-gupta-885b9a317"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/_.dhruv._.x/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FaInstagram size={16} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
