import React from 'react'

export default function LabShowcase(){
  const items = [
    {
      title: 'DeğiştirildiBYezgi',
      description: 'AÇIKLAMAby EZGİ DEĞİŞTİRİLDİ',
      status: 'CHANGEDby ezgi --- changed again',
      tech: ['IoT', 'AI', 'Cloud']
    },
    {
      title: 'AI Station Assistant',
      description: 'AI-powered virtual assistant for station navigation and support',
      status: 'prototype',
      tech: ['NLP', 'ML', 'Voice']
    },
    {
      title: 'Blockchain Safety Records_rechanged',
      description: 'Immutable safety record system using blockchain',
      status: 'research1',
      tech: ['Blockchain', 'Smart Contracts']
    },
{
      title: 'Blockchain Safety Records_2',
      description: 'Immutable safety record system using blockchain',
      status: 'research',
      tech: ['Blockchain', 'Smart Contracts']
    },
    {
      title: 'Carbon-Neutral Routing_l CHANGED',
      description: 'Optimized routing algorithms for minimal environmental impact',
      status: 'development',
      tech: ['Algorithms', 'Green Tech']
    }
  ]

  return (
    <section className="lab-showcase">
      <div className="lab-header">
        <h2>Innovation Lab</h2>
        <p>Prototypes and experiments that explore future possibilities.</p>
      </div>
      
      <div className="lab-grid">
        {items.map(item => (
          <div key={item.title} className="lab-card">
            <div className="lab-card-header">
              <h3>{item.title}</h3>
              <span className={`lab-status ${item.status}`}>{item.status}</span>
            </div>
            <p>{item.description}</p>
            <div className="lab-tech">
              {item.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
