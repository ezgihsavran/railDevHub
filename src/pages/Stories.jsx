import React from 'react'
import StoryCard from '../sections/StoryCard'
import '../styles/stories.css'

export default function Stories(){
  const rayDataContent = {
    title: "RayData: The Power of Railway Data",
    tag: "Data Analytics",
    date: "November 2025",
    location: "Istanbul, Turkey",
    excerpt: "A data revolution rising from Istanbul... The story of numbers dancing across thousands of kilometers of network of Turkey's largest railway operator.",
    metrics: [
      { value: "3", label: "Dashboards" },
      { value: "100+", label: "Detailed Reports" },
      { value: "15%", label: "Operational Efficiency" },
      { value: "40%", label: "Decision Speed" }
    ]
  };

  const rayNextContent = {
    title: "RayNext: The Future of Railways",
    tag: "Digital Transformation",
    date: "November 2025",
    location: "Ankara, Turkey",
    excerpt: "A journey starting from the heart of Turkey, Ankara... A vision crossing Istanbul's bridges... The story of a digital transformation rising above thousands of kilometers of railway network.",
    metrics: [
      { value: "2025", label: "Project Start" },
      { value: "100%", label: "Digital Processes" },
      { value: "5+", label: "Integrated Systems" }
    ]
  };

  return (
    <section className="stories-page">
      <div className="container">
        <div className="stories-hero">
          <h1>Our Stories</h1>
          <p>Real transformation stories where data and digital transformation created measurable impact.</p>
        </div>

        <div className="stories-grid">
          <article className="story-card featured">
            <div className="story-header">
              <span className="story-tag">{rayDataContent.tag}</span>
              <h4>{rayDataContent.title}</h4>
            </div>
            <div className="story-meta-row">
              <span className="story-date">{rayDataContent.date}</span>
              <span className="story-location">{rayDataContent.location}</span>
            </div>
            <p>{rayDataContent.excerpt}</p>
            <div className="story-metrics">
              {rayDataContent.metrics.map((metric, index) => (
                <div key={index} className="metric">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-key">{metric.label}</div>
                </div>
              ))}
            </div>
            <a className="small-link" href="/stories/raydata">Read more →</a>
          </article>

          <StoryCard story={rayNextContent} />
        </div>
      </div>
    </section>
  )
}
