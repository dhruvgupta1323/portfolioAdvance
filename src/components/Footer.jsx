import React from 'react'

function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-content">
        <p className="footer-brand">Dhruv Gupta</p>
        <p className="footer-copy">© {new Date().getFullYear()} • Designed & Built with ❤️</p>
        <div className="footer-socials">
          <a href="https://github.com/dhruvgupta1323" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dhruv-gupta-885b9a317" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
