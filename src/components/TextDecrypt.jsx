import React, { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?~'

export default function TextDecrypt({ text, className = '', hoverTrigger = true, delay = 0 }) {
  const [displayText, setDisplayText] = useState(text)
  const isScrambling = useRef(false)
  const timeoutRef = useRef(null)

  const scramble = () => {
    if (isScrambling.current) return
    isScrambling.current = true

    let iteration = 0
    const targetText = text
    const totalIterations = targetText.length * 2.5

    const interval = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 2.5) {
              return targetText[index]
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      })

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(targetText)
        isScrambling.current = false
      }

      iteration += 1
    }, 28)
  }

  useEffect(() => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(scramble, delay)
    } else {
      scramble()
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text])

  return (
    <span
      className={`inline-block font-mono tracking-tight transition-colors ${className}`}
      onMouseEnter={hoverTrigger ? scramble : undefined}
    >
      {displayText}
    </span>
  )
}
