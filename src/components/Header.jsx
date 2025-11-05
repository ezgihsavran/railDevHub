import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="4" fill="var(--accent)" />
            <path d="M4 16 L20 8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="brand-text">RailDevHub</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'active': ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'active': ''}>About</NavLink>
          <NavLink to="/expertise" className={({isActive})=> isActive? 'active': ''}>Expertise</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive? 'active': ''}>Projects</NavLink>
          <NavLink to="/stories" className={({isActive})=> isActive? 'active': ''}>Stories</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
