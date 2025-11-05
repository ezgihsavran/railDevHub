import React from 'react'

export default function StoryCard({story}){
  return (
    <article className="story-card">
      <div className="story-header">
        {story.tag && <div className="story-tag">{story.tag}</div>}
        <div className="story-meta-row">
          {story.date && <div className="story-date">{story.date}</div>}
          {story.location && <div className="story-location">{story.location}</div>}
        </div>
      </div>

      <h4>{story.title}</h4>
      <p>{story.excerpt}</p>

      {story.metrics && (
        <div className="story-metrics">
          {story.metrics.map((metric, index) => (
            <div key={index} className="metric">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-key">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <a className="small-link" href={`/stories/${story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
        Read more →
      </a>
    </article>
  )
}
