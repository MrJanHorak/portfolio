import React, { Suspense, lazy, useEffect, useState } from 'react'
import './styles/App.css'

// Components
import ModernNav from './Components/ModernNav/ModernNav'
import ScrollProgress from './Components/ScrollProgress/ScrollProgress'
import ParticleSystem from './Components/ParticleSystem/ParticleSystem'
import ThemeSelector from './Components/ThemeSelector/ThemeSelector'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import CommandPalette from './Components/CommandPalette/CommandPalette'

// Lazy load components
const HeroSection = lazy(() => import('./Components/HeroSection/HeroSection'))
const AboutSection = lazy(
  () => import('./Components/AboutSection/AboutSection')
)
const SkillsSection = lazy(
  () => import('./Components/SkillsSection/SkillsSection')
)
const ProjectsSection = lazy(
  () => import('./Components/ProjectsSection/ProjectsSection')
)
const ContactSection = lazy(
  () => import('./Components/ContactSection/ContactSection')
)

// Central theme color map for all themes
const THEME_COLORS = {
  light: {
    primary: '#ff6b35',
    secondary: '#f7931e',
    accent: '#ffb627',
    text: '#5d4037',
    border: '#fef7f0'
  },
  dark: {
    primary: '#ff6b35',
    secondary: '#f7931e',
    accent: '#ffb627',
    text: '#ffcc9c',
    border: '#2c1810'
  },
  'light-original': {
    primary: '#0093e9',
    secondary: '#80d0c7',
    accent: '#006db2',
    text: '#222',
    border: '#0093e9'
  }
}

const AVAILABLE_THEMES = new Set(['light', 'dark', 'light-original'])

const THEME_MIGRATION = {
  'dark-original': 'dark',
  bwDark: 'dark',
  bwLight: 'light'
}

const normalizeTheme = (theme) => {
  const migratedTheme = THEME_MIGRATION[theme] || theme
  return AVAILABLE_THEMES.has(migratedTheme) ? migratedTheme : 'light'
}

const App = () => {
  const [theme, setTheme] = useState(() =>
    normalizeTheme(localStorage.getItem('theme'))
  )
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

  // Theme management for all themes
  useEffect(() => {
    const normalizedTheme = normalizeTheme(theme)

    if (normalizedTheme !== theme) {
      setTheme(normalizedTheme)
      return
    }

    document.documentElement.setAttribute('data-theme', normalizedTheme)
    localStorage.setItem('theme', normalizedTheme)
  }, [theme])

  return (
    <div className={`App ${konamiActivated ? 'konami-activated' : ''}`}>
      <ScrollProgress />
      <ParticleSystem />
      <ModernNav
        theme={theme}
        logoColors={THEME_COLORS[theme] || THEME_COLORS.light}
      />
      <CommandPalette />
      <ThemeSelector theme={theme} setTheme={setTheme} />

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
