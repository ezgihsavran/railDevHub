import React from 'react'
import ProjectCard from '../sections/ProjectCard'
import '../styles/projects.css'

export default function Projects(){
  const projects = [
    {
      id: 1,
      title: 'Smart Track Sensors',
      tag: 'IoT',
      summary: 'Early detection of track anomalies using distributed sensor networks and real-time monitoring.'
    },
    {
      id: 2,
      title: 'AI Station Assistant',
      tag: 'AI',
      summary: 'Multilingual passenger assistance system powered by advanced natural language processing.'
    },
    {
      id: 3,
      title: 'Digital Twin Network',
      tag: 'Simulation',
      summary: 'Virtual railway network replica for testing and optimizing operations in a safe environment.'
    },
    {
      id: 4,
      title: 'RayData Dashboards',
      tag: 'Analytics',
      summary: 'Comprehensive operational dashboards and reports for data-driven decision making.'
    }
  ]

  return (
    <div className="projects-page">
      <section className="container">
        <div className="projects-hero">
          <h1>Our Projects</h1>
          <p>
            Exploring innovative solutions that transform railway operations through
            cutting-edge technology and smart infrastructure.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </div>
  );
}

