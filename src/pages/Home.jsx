import React from 'react'
import './home.css'
import Hero from '../sections/Hero'
import CoreValues from '../sections/CoreValues'
import LabShowcase from '../sections/LabShowcase'
import StoriesPreview from '../sections/StoriesPreview'

export default function Home(){
  return (
    <div className="page home-page">
      <Hero />
      <div className="container">
        <CoreValues />
        <LabShowcase />
        <StoriesPreview />
      </div>
    </div>
  )
}
