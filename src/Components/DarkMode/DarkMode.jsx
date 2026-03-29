import React, { useEffect, useState } from 'react'
import { setPicturesThemed } from '../../assets/setPicturesThemed'
import { FaGithub } from 'react-icons/fa'

const THEMES = [
  {
    key: 'light',
    label: 'Modern Light',
    preview: 'linear-gradient(135deg, #fef7f0 0%, #fff8e1 100%)'
  },
  {
    key: 'dark',
    label: 'Modern Dark',
    preview: 'linear-gradient(135deg, #2c1810 0%, #3e2723 100%)'
  },
  {
    key: 'light-original',
    label: 'Classic Light',
    preview: 'linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)'
  },
  {
    key: 'dark-original',
    label: 'Classic Dark',
    preview: 'linear-gradient(160deg, #04456a 0%, #48746e 100%)'
  },
  {
    key: 'bwLight',
    label: 'B&W Light',
    preview: 'linear-gradient(135deg, #fff 0%, #eee 100%)'
  },
  {
    key: 'bwDark',
    label: 'B&W Dark',
    preview: 'linear-gradient(135deg, #333 0%, #111 100%)'
  }
]

const themeToPicture = {
  light: 'color',
  dark: 'colorDark',
  'light-original': 'color',
  'dark-original': 'colorDark',
  bwLight: 'light',
  bwDark: 'dark'
}

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    setPicturesThemed(themeToPicture[mode] || 'color')
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <div
      className="toggle-theme-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'center',
        margin: '1rem 0'
      }}
    >
      <div style={{ display: 'flex', gap: 12 }}>
        {THEMES.map((theme) => (
          <button
            key={theme.key}
            title={theme.label}
            aria-label={theme.label}
            onClick={() => setMode(theme.key)}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border:
                mode === theme.key
                  ? '3px solid var(--primary-color)'
                  : '2px solid #ccc',
              outline:
                mode === theme.key
                  ? '2px solid var(--secondary-color)'
                  : 'none',
              background: theme.preview,
              cursor: 'pointer',
              boxShadow:
                mode === theme.key ? '0 0 8px var(--primary-color)' : 'none',
              transition: 'all 0.2s',
              position: 'relative'
            }}
          >
            {mode === theme.key && (
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  border: '2px solid #fff',
                  boxShadow: '0 0 2px #000'
                }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="footer-info" style={{ marginLeft: 24 }}>
        <p>
          ©2024 Jan Horak
          <a
            href="https://github.com/MrJanHorak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </div>
  )
}

export default DarkMode
