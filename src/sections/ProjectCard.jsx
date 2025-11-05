import React from 'react'
export default function ProjectCard({project}){
  return (
    <article className="project-card">
      <div className="project-body">
        <h4>{project.title}</h4>
        <small>{project.tag}</small>
        <p>{project.summary}</p>
        <a className="small-link" href="/projects">Read more →</a>
      </div>
    </article>
  )
}
