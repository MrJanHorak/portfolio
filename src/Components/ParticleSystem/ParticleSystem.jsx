import React, { useEffect, useRef } from 'react'

const ParticleSystem = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDuration = Math.random() * 8 + 14 + 's'
      particle.style.animationDelay = Math.random() * 2 + 's'

      particlesRef.current.appendChild(particle)

      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 20000)
    }

    const interval = setInterval(createParticle, 4200)
    return () => clearInterval(interval)
  }, [])

  return <div className="particles" ref={particlesRef}></div>
}

export default ParticleSystem
