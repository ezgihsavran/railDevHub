import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Expertise from './pages/Expertise'
import Projects from './pages/Projects'
import Stories from './pages/Stories'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
