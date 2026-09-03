// Lightweight Web Audio API synthesizer for futuristic UI feedback (Zero external audio file dependencies)

class SoundEngine {
  constructor() {
    this.ctx = null
    this.enabled = false
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  toggle() {
    this.init()
    this.enabled = !this.enabled
    if (this.enabled) {
      this.playChime()
    }
    return this.enabled
  }

  playHover() {
    if (!this.enabled) return
    this.init()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(520, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.04)
    } catch (e) {
      // Ignore audio context errors
    }
  }

  playClick() {
    if (!this.enabled) return
    this.init()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(800, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.06)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.06)
    } catch (e) {
      // Ignore audio context errors
    }
  }

  playChime() {
    this.init()
    if (!this.ctx) return

    try {
      const notes = [587.33, 739.99, 880, 1174.66]
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.05)

        gain.gain.setValueAtTime(0.025, this.ctx.currentTime + index * 0.05)
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + index * 0.05 + 0.3)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(this.ctx.currentTime + index * 0.05)
        osc.stop(this.ctx.currentTime + index * 0.05 + 0.3)
      })
    } catch (e) {
      // Ignore audio context errors
    }
  }
}

export const sound = new SoundEngine()
