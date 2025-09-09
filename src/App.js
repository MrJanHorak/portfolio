import React, { Suspense, lazy, useEffect, useState } from 'react'
import './styles/App.css'

// Components
import ModernNav from './Components/ModernNav/ModernNav'
import ScrollProgress from './Components/ScrollProgress/ScrollProgress'
import ParticleSystem from './Components/ParticleSystem/ParticleSystem'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'

// Lazy load components
const HeroSection = lazy(() => import('./Components/HeroSection/HeroSection'))
const AboutSection = lazy(() =>
  import('./Components/AboutSection/AboutSection')
)
const SkillsSection = lazy(() =>
  import('./Components/SkillsSection/SkillsSection')
)
const ProjectsSection = lazy(() =>
  import('./Components/ProjectsSection/ProjectsSection')
)
const ContactSection = lazy(() =>
  import('./Components/ContactSection/ContactSection')
)

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [showSecretMessage, setShowSecretMessage] = useState(false)

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA'
    ]
    let userInput = []

    const handleKeyDown = (e) => {
      userInput.push(e.code)
      userInput = userInput.slice(-konamiCode.length)

      if (userInput.join('') === konamiCode.join('')) {
        setKonamiActivated(true)
        setShowSecretMessage(true)
        setTimeout(() => setShowSecretMessage(false), 3000)
        setTimeout(() => setKonamiActivated(false), 10000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`App ${konamiActivated ? 'konami-activated' : ''}`}>
      <ScrollProgress />
      <ParticleSystem />
      <ModernNav theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Secret Message Easter Egg */}
      <div className={`secret-message ${showSecretMessage ? 'show' : ''}`}>
        <h3>🎉 Konami Code Activated!</h3>
        <p>You found the secret! You're clearly a developer of culture.</p>
      </div>
    </div>
  )
}

export default App
