import React from 'react'
import './footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>RailDev Demo</h4>
            <p>A specialized team of 15 experts combining the power of AI and software to build amazing railway projects.</p>
            <p className="footer-focus">Focusing on Security, Performance, Modern Design, and Quality Products.</p>
          </div>
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/expertise">Expertise</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/stories">Stories</a></li>
            </ul>
          </div>
          <div className="footer-tech">
            <h5>Core Tech</h5>
            <ul>
              <li><a href="/expertise#ai">AI & Machine Learning</a></li>
              <li><a href="/expertise#backend">Java & SpringBoot</a></li>
              <li><a href="/expertise#frontend">React & Modern Web</a></li>
              <li><a href="/expertise#devops">Kubernetes & DevOps</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <p><a href="mailto:demo@rail.dev">demo@rail.dev</a></p>
            <div className="social-links">
              <a href="https://github.com/raildevhub" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© {currentYear} Disclaimer: This website is an unofficial, non-commercial educational demo inspired by real-world railway management systems.
All original design rights belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  )
}
