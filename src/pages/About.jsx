import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="about-hero">
          <h1>Where Steel Rails Meet Silicon Dreams</h1>
          <p>We are a specialized team of 15 visionaries who believe that the future of transportation is being written in code, analyzed by AI, and powered by data streaming through thousands of kilometers of steel rails.</p>
        </div>

        <div className="about-quote">
          <p>"Every train that crosses Turkey carries not just passengers, but our dreams of a smarter, safer, and more connected future."</p>
        </div>

        <div className="about-section">
          <h2>Our Story: The Birth of a Revolution</h2>
          <div className="story-grid">
            <div className="story-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h18M10 3L8 21M16 3l2 18M3 6h18M3 14h18M3 18h18" />
                </svg>
                The Railway Heritage
              </h3>
              <p>Some of us grew up next to train stations, falling asleep to the rhythmic sound of wheels on tracks. Others were engineers who spent years maintaining locomotives. We all shared one thing: a deep love for railways and a frustration with outdated systems.</p>
            </div>
            <div className="story-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                The Digital Awakening
              </h3>
              <p>We witnessed how AI transformed industries—from healthcare to finance. Yet railways, the backbone of nations, still relied on paper forms and manual processes. We knew we had to change this.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>What We're Building Today</h2>
          <div className="building-grid">
            <div className="building-item">
              <h3>Digital Platforms</h3>
              <p>RayNext and RayData are just the beginning. We're building the digital infrastructure that will power Turkey's railways for the next 50 years.</p>
              <ul className="building-features">
                <li>Type approval & certification systems</li>
                <li>Real-time BI dashboards</li>
                <li>Predictive analytics engines</li>
              </ul>
            </div>
            <div className="building-item">
              <h3>IoT & Smart Sensors</h3>
              <p>Thousands of sensors deployed across tracks, stations, and trains, all speaking to our AI brain in real-time.</p>
              <ul className="building-features">
                <li>Track condition monitoring</li>
                <li>Environmental sensors in stations</li>
                <li>Real-time train telemetry</li>
              </ul>
            </div>
            <div className="building-item">
              <h3>AI-Powered Intelligence</h3>
              <p>Machine learning models that predict failures before they happen, optimize routes in milliseconds, and learn from every journey.</p>
              <ul className="building-features">
                <li>Predictive maintenance AI</li>
                <li>Demand forecasting models</li>
                <li>Anomaly detection systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>The Future We're Building</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>The Foundation Year</h3>
                <p>RayNext and RayData go live. Digital transformation begins. Every form, every process, every decision becomes data-driven.</p>
                <div className="timeline-features">
                  <span className="timeline-feature">✓ Full platform deployment</span>
                  <span className="timeline-feature">✓ 10,000+ daily active users</span>
                  <span className="timeline-feature">✓ Real-time data streaming</span>
                  <span className="timeline-feature">✓ 100+ reports & dashboards</span>
                </div>
              </div>
              <div className="timeline-year">2027</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>The Intelligence Layer</h3>
                <p>AI agents take control. Predictive maintenance saves millions. Autonomous decision systems optimize operations in real-time.</p>
                <div className="timeline-features">
                  <span className="timeline-feature">◆ AI-powered predictive maintenance</span>
                  <span className="timeline-feature">◆ Autonomous scheduling</span>
                  <span className="timeline-feature">◆ Real-time anomaly detection</span>
                  <span className="timeline-feature">◆ Smart energy management</span>
                </div>
              </div>
              <div className="timeline-year">2030</div>
            </div>
          </div>
          
          <div className="about-quote">
            <p>By 2030, we aim to make Turkey's railway network the smartest in the world.</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team by the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Expert Team Members</div>
              <p>Specialists in AI, software engineering, and DevOps</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Core Technologies</div>
              <p>From AI/ML to cloud infrastructure</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Major Projects</div>
              <p>Transforming railway operations at scale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
