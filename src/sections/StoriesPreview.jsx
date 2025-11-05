import React from 'react'
import './storiespreview.css'

export default function StoriesPreview() {
  const stories = [
    {
      title: 'RayNext Story',
      subtitle: 'The Future of Digital Railway',
      desc: 'A journey from Ankara to Istanbul - building the bridge between traditional railway operations and the digital future.',
      route: 'Ankara → Istanbul',
      link: '/stories#raynext',
      tag: 'Digital Transformation'
    },
    {
      title: 'RayData Story',
      subtitle: 'The Power of Railway Data',
      desc: 'A data revolution rising from Istanbul, empowering decision-makers in Ankara. 3 dashboards, 100+ reports, and actionable insights.',
      route: 'Istanbul → Ankara',
      link: '/stories#raydata',
      tag: 'Data Analytics'
    }
  ]

  return (
    <section className="stories-preview">
      <div className="container">
        <div className="section-header">
          <h2>Our Transformation Stories</h2>
          <p>Behind every project is an inspiring journey from vision to reality</p>
        </div>
        <div className="story-grid">
          {stories.map(story => (
            <article key={story.title} className="story-card">
              <div className="story-tag">{story.tag}</div>
              <h3>{story.title}</h3>
              <h4>{story.subtitle}</h4>
              <p>{story.desc}</p>
              <div className="story-meta">
                <div className="story-route">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" />
                  </svg>
                  {story.route}
                </div>
                <a href={story.link} className="read-more">
                  Read the Story
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="stories-cta">
          <a href="/stories" className="btn">Read All Stories</a>
        </div>
      </div>
    </section>
  )
}
