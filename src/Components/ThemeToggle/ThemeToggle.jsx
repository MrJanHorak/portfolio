import React, { useEffect } from 'react'

const ThemeToggle = ({ theme, onToggle }) => {
  // Update favicon when theme changes
  useEffect(() => {
    const updateFavicon = () => {
      // Remove existing theme-specific favicons
      const existingIcons = document.querySelectorAll('link[rel="icon"][media]')
      existingIcons.forEach((icon) => icon.remove())

      // Add the appropriate favicon for current theme
      const favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.type = 'image/svg+xml'
      favicon.href =
        theme === 'light' ? '/favicon-light.svg' : '/favicon-dark.svg'

      document.head.appendChild(favicon)

      // Update theme color meta tag
      let themeColorMeta = document.querySelector(
        'meta[name="theme-color"]:not([media])'
      )
      if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta')
        themeColorMeta.name = 'theme-color'
        document.head.appendChild(themeColorMeta)
      }
      themeColorMeta.content = theme === 'light' ? '#ff6b35' : '#2c1810'
    }

    updateFavicon()
  }, [theme])

  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
