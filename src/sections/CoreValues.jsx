import React from 'react'
import './corevalues.css'

export default function CoreValues() {
  const vals = [
    {
      title: 'Security First',
      desc: 'Enterprise-grade security measures to protect critical railway infrastructure and data',
      icon: (
        <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L3 7v9a6 6 0 0 0 3.84 5.6l5.16 2.4 5.16-2.4A6 6 0 0 0 21 16V7l-9-5z" />
          <path d="M12 8v8M8 12l4 4 4-4" />
        </svg>
      )
    },
    {
      title: 'High Performance',
      desc: 'Optimized systems capable of handling large-scale railway operations in real-time',
      icon: (
        <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'Modern Design',
      desc: 'Intuitive, user-friendly interfaces built with the latest design principles',
      icon: (
        <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Quality Products',
      desc: 'Rigorous testing and best practices ensure reliable, production-ready solutions',
      icon: (
        <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      )
    },
  ]
  
  return (
    <section className="core-values">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>We are committed to delivering excellence through our fundamental principles</p>
        </div>
        <div className="values-grid">
          {vals.map(v => (
            <article key={v.title} className="value-card">
              {v.icon}
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
