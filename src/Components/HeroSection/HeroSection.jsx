import React, { useEffect, useRef } from 'react'

const HeroSection = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Jan Horak</h1>
        <p className="hero-subtitle">
          Full Stack Developer crafting digital experiences with passion,
          creativity, and a touch of magic ✨
        </p>
        <button className="cta-button" onClick={scrollToAbout}>
          Explore My Work
          <span>↓</span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
