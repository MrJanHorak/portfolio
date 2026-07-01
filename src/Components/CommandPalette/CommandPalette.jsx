import React, { useEffect, useMemo, useRef, useState } from 'react'
import { getScrollBehavior } from '../../utils/motion'

const COMMANDS = [
  {
    id: 'go-home',
    label: 'Go to Home',
    description: 'Jump to hero section',
    keywords: 'home hero top',
    action: () => scrollToSection('hero')
  },
  {
    id: 'go-about',
    label: 'Go to About',
    description: 'Jump to about section',
    keywords: 'about bio profile',
    action: () => scrollToSection('about')
  },
  {
    id: 'go-skills',
    label: 'Go to Skills',
    description: 'Jump to skills section',
    keywords: 'skills tech stack',
    action: () => scrollToSection('skills')
  },
  {
    id: 'go-projects',
    label: 'Go to Projects',
    description: 'Jump to featured projects',
    keywords: 'projects portfolio work',
    action: () => scrollToSection('projects')
  },
  {
    id: 'go-contact',
    label: 'Go to Contact',
    description: 'Jump to contact section',
    keywords: 'contact email hire',
    action: () => scrollToSection('contact')
  },
  {
    id: 'open-bookends',
    label: 'Open Bookends Marketplace',
    description: 'Launch live marketplace site',
    keywords: 'bookends marketplace business app demo',
    action: () => openExternal('https://bookendsmarketplace.com/')
  },
  {
    id: 'open-firepit',
    label: 'Open Fire Pit Planning Tool',
    description: 'Launch masonry design planner',
    keywords: 'firepit fire pit planning tool app demo',
    action: () => openExternal('https://fire-pit-planning-tool.vercel.app/')
  },
  {
    id: 'open-spot-on-shelves',
    label: 'Open Spot on Shelves',
    description: 'Launch shelf layout planning app',
    keywords: 'spoton spot on shelves layout planner app demo',
    action: () => openExternal('https://spot-on-shelves.netlify.app/')
  },
  {
    id: 'open-advent-calendar',
    label: 'Open Advent Calendar',
    description: 'Launch Doorly Advent project',
    keywords: 'advent advently doorly calendar holiday app',
    action: () => openExternal('https://doorly-advent.vercel.app/')
  },
  {
    id: 'open-pacman',
    label: 'Open Pac-Man Clone',
    description: 'Launch live game demo',
    keywords: 'pacman game demo',
    action: () => openExternal('https://pacmanclone.surge.sh/')
  },
  {
    id: 'open-resume',
    label: 'Open Resume PDF',
    description: 'View current resume',
    keywords: 'resume cv download pdf',
    action: () => openExternal('/Jan-Horak-Resume-2026.pdf')
  },
  {
    id: 'open-portfolio-source',
    label: 'Open Portfolio Source Code',
    description: 'View this portfolio repository',
    keywords: 'portfolio source code repo github',
    action: () => openExternal('https://github.com/MrJanHorak/portfolio')
  },
  {
    id: 'open-github',
    label: 'Open GitHub Profile',
    description: 'View code and repositories',
    keywords: 'github code repos',
    action: () => openExternal('https://github.com/MrJanHorak')
  },
  {
    id: 'open-linkedin',
    label: 'Open LinkedIn Profile',
    description: 'Professional profile and experience',
    keywords: 'linkedin career work',
    action: () => openExternal('https://www.linkedin.com/in/jan-horak/')
  },
  {
    id: 'send-email',
    label: 'Send Email',
    description: 'Open default mail app',
    keywords: 'email contact hire',
    action: () => {
      window.location.href = 'mailto:jan-horak@gmx.de'
    }
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' })
  }
}

const openExternal = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const getShortcutLabel = () => {
  if (typeof navigator === 'undefined') return 'Ctrl+K'
  return /Mac|iPhone|iPad|iPod/i.test(navigator.platform) ? '⌘K' : 'Ctrl+K'
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const shortcutLabel = getShortcutLabel()

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) return COMMANDS

    return COMMANDS.filter((command) =>
      `${command.label} ${command.description} ${command.keywords}`
        .toLowerCase()
        .includes(normalizedQuery)
    )
  }, [query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query, isOpen])

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'

      if (isShortcut) {
        event.preventDefault()
        setIsOpen((prev) => !prev)
        return
      }

      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [isOpen])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 0)
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const closePalette = () => {
    setIsOpen(false)
    setQuery('')
    setActiveIndex(0)
  }

  const runCommand = (command) => {
    closePalette()
    setTimeout(() => command.action(), 0)
  }

  const handleInputKeyDown = (event) => {
    if (!filteredCommands.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex(
        (prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length
      )
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      runCommand(filteredCommands[activeIndex])
    }
  }

  return (
    <>
      <button
        type="button"
        className="command-palette-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Open quick command palette (${shortcutLabel})`}
      >
        <span className="command-trigger-label">Quick Jump</span>
        <kbd>{shortcutLabel}</kbd>
      </button>

      {isOpen && (
        <div className="command-palette-overlay" onClick={closePalette}>
          <div
            className="command-palette"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="command-search-wrapper">
              <input
                ref={inputRef}
                className="command-search-input"
                type="text"
                placeholder="Type a command or section..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
              />
            </div>

            <div className="command-results" role="listbox">
              {filteredCommands.length === 0 ? (
                <div className="command-empty">No matching commands.</div>
              ) : (
                filteredCommands.map((command, index) => (
                  <button
                    key={command.id}
                    type="button"
                    className={`command-item ${
                      index === activeIndex ? 'active' : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => runCommand(command)}
                  >
                    <span className="command-item-label">{command.label}</span>
                    <span className="command-item-description">
                      {command.description}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommandPalette
