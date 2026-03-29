import React, { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'

const ModernNav = ({ theme = 'light', logoColors }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`modern-nav ${isVisible ? '' : 'nav-hidden'}`}>
      <div
        className="nav-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        }}
      >
        <Logo
          size={32}
          theme={theme}
          colors={logoColors}
          className="nav-logo"
        />
        <ul className="nav-list">
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ModernNav
