import React, { useState, useEffect, useRef } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const THEMES = [
  {
    key: 'light',
    label: 'Modern Light',
    preview: 'linear-gradient(135deg, #fef7f0 0%, #fff8e1 100%)',
    icon: <FaSun />
  },
  {
    key: 'dark',
    label: 'Modern Dark',
    preview: 'linear-gradient(135deg, #2c1810 0%, #3e2723 100%)',
    icon: <FaMoon />
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

export default function ThemeSelector({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isDark =
    theme === 'dark' || theme === 'dark-original' || theme === 'bwDark'

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 3000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="theme-toggle"
        aria-label="Toggle theme palette"
        onClick={() => setOpen((o) => !o)}
        style={{ fontSize: 24 }}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
      {open && (
        <div
          style={{
            marginTop: 8,
            background: 'var(--card-bg)',
            borderRadius: 16,
            boxShadow: '0 8px 32px var(--shadow-color)',
            padding: 12,
            display: 'flex',
            gap: 10,
            zIndex: 3100
          }}
        >
          {THEMES.map((t) => (
            <button
              key={t.key}
              title={t.label}
              aria-label={t.label}
              onClick={() => {
                setTheme(t.key)
                setOpen(false)
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border:
                  theme === t.key
                    ? '3px solid var(--primary-color)'
                    : '2px solid #ccc',
                outline:
                  theme === t.key ? '2px solid var(--secondary-color)' : 'none',
                background: t.preview,
                cursor: 'pointer',
                boxShadow:
                  theme === t.key ? '0 0 8px var(--primary-color)' : 'none',
                transition: 'all 0.2s',
                position: 'relative',
                margin: 2
              }}
            >
              {theme === t.key && (
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
      )}
    </div>
  )
}
