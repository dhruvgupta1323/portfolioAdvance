import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [initialLoading, setInitialLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Initial fast load animation bar on page mount
  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 15
      if (progress >= 100) {
        setLoadProgress(100)
        clearInterval(interval)
        setTimeout(() => setInitialLoading(false), 300)
      } else {
        setLoadProgress(progress)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Initial Page Load Bar */}
      {initialLoading && (
        <div
          className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none bg-indigo-50/20"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      )}

      {/* Real-time Smooth Scroll Progress Loadbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 origin-left z-[2000] shadow-[0_1px_10px_rgba(124,58,237,0.4)] pointer-events-none"
        style={{ scaleX }}
        aria-hidden="true"
      />
    </>
  )
}
