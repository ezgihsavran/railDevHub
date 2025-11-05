import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rail_theme') || 'light' } catch(e){ return 'light' }
  })

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
    try { localStorage.setItem('rail_theme', theme) } catch(e){}
  }, [theme])

  const toggle = ()=> setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <button aria-label="Toggle theme" className="theme-toggle" onClick={toggle}>
      {theme === 'dark' ? (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      ) : (
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      )}
      <span style={{opacity:0.85, fontSize:12}}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
