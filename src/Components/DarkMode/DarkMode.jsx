import React, { useEffect, useState } from 'react'
import { setPicturesThemed } from '../../assets/setPicturesThemed'
import { FaGithub } from 'react-icons/fa'
import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { VscColorMode } from 'react-icons/vsc'
import ColorPalette from '../ColorPalette/ColorPalette'

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'))

  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const setBwLight = () => {
    localStorage.setItem('theme', 'bwLight')
    document.documentElement.setAttribute('data-theme', 'bwLight')
  }

  const setBwDark = () => {
    localStorage.setItem('theme', 'bwDark')
    document.documentElement.setAttribute('data-theme', 'bwDark')
  }

  const storedTheme = localStorage.getItem('theme')

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark)

  let themeIcon = <CiLight />
  let colorIcon = <VscColorMode />

  if (defaultDark && mode !== 'bwDark') {
    setDark()
    setPicturesThemed('colorDark')
    colorIcon = <VscColorMode />
    themeIcon = <CiLight />
  }

  if (mode === 'light') {
    setLight()
    setPicturesThemed('color')
    colorIcon = <VscColorMode />
    themeIcon = <MdOutlineDarkMode />
  }

  if (mode === 'bwLight') {
    setBwLight()
    setPicturesThemed('light')
    colorIcon = <ColorPalette />
    themeIcon = <MdOutlineDarkMode />
  }

  if (mode === 'bwDark') {
    setBwDark()
    setPicturesThemed('dark')
    colorIcon = <ColorPalette />
    themeIcon = <CiLight />
  }

  const toggleTheme = () => {
    if (storedTheme === 'light' || storedTheme === null) {
      setDark()
      setPicturesThemed('color')
      setMode('dark')
    } else if (storedTheme === 'dark') {
      setLight()
      setPicturesThemed('color')
      setMode('light')
    } else if (storedTheme === 'bwLight') {
      setBwDark()
      setPicturesThemed('dark')
      setMode('bwDark')
    } else if (storedTheme === 'bwDark') {
      setBwLight()
      setPicturesThemed('light')
      setMode('bwLight')
    }
  }

  const toggleColor = () => {
    if (storedTheme === 'light') {
      setBwLight()
      setPicturesThemed('light')
      setMode('bwLight')
      colorIcon = <IoColorPaletteSharp />
    } else if (storedTheme === 'dark') {
      setBwDark()
      setPicturesThemed('dark')
      setMode('bwDark')
      colorIcon = <IoColorPaletteSharp />
    } else if (storedTheme === 'bwLight') {
      setLight()
      setPicturesThemed('color')
      setMode('light')
      colorIcon = <VscColorMode />
    } else if (storedTheme === 'bwDark') {
      setDark()
      setPicturesThemed('color')
      setMode('dark')
      colorIcon = <VscColorMode />
    }
  }

  useEffect(() => {
    if (storedTheme === null) {
      setDark()
      setPicturesThemed('colorDark')
      setMode(localStorage.getItem('theme'))
      colorIcon = <VscColorMode />
      themeIcon = <CiLight />
    }
  }, [storedTheme])
  return (
    <div className="toggle-theme-wrapper">
      <span role="img" aria-label="light theme">
        {/* <div onClick={toggleColor}>{colorIcon}</div> */}
        <label className="switch">
          <span className="palette">
            <ColorPalette />
          </span>
          <span className="blackNwhite">
            <VscColorMode />
          </span>
          <input type="checkbox" className="input" onClick={toggleColor} />
          <span className="slider"></span>
        </label>
      </span>
      <span role="img" aria-label="light theme">
        {/* <div onClick={toggleTheme}>{themeIcon}</div> */}
        <label className="switch">
          <span className="sun">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ffd43b">
                <circle r="5" cy="12" cx="12"></circle>
                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
              </g>
            </svg>
          </span>
          <span className="moon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </span>
          <input type="checkbox" className="input" onClick={toggleTheme} />
          <span className="slider"></span>
        </label>
      </span>
      <div className="footer-info">
        <p>
          ©2023 Jan Horak
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
