import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Where Steel Rails Meet Silicon Dreams</h1>
          <p>15 visionaries combining AI, IoT, Big Data, and Software Engineering to transform Turkey's railways into an intelligent, self-optimizing transportation network</p>
          <div className="hero-ctas">
            <a className="btn" href="/projects">See What We're Building</a>
            <a className="btn ghost" href="/stories">Read Our Journey</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Expert Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Major Platforms</div>
            </div>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--accent)', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" />
            <g transform="translate(40,40)">
              <rect x="0" y="0" width="220" height="120" rx="12" fill="var(--bg-2)" />
              <rect x="0" y="140" width="380" height="120" rx="12" fill="var(--bg-2)" />
              <circle cx="420" cy="60" r="40" fill="var(--accent)" opacity="0.95">
                <animate
                  attributeName="r"
                  values="35;40;35"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <path d="M60,60 L180,60" stroke="var(--accent-2)" strokeWidth="4" strokeLinecap="round">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,140;140,0;0,140"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </svg>
          <div className="shimmer"></div>
        </div>
      </div>
    </section>
  )
}
