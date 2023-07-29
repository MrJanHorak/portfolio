import React, { useEffect, useState } from 'react'
import { setPicturesThemed } from '../../assets/setPicturesThemed'
import { FaGithub } from 'react-icons/fa'
import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { VscColorMode } from 'react-icons/vsc'

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
  let colorIcon = <IoColorPaletteSharp />

  if (defaultDark && mode!=="bwDark") {
    setDark()
    setPicturesThemed('colorDark')
    colorIcon = <IoColorPaletteSharp />
    themeIcon = <CiLight />
  }

  if (mode === 'light') {
    setLight()
    setPicturesThemed('color')
    colorIcon = <IoColorPaletteSharp />
    themeIcon = <MdOutlineDarkMode />
  }

  if (mode === 'bwLight') {
    setBwLight()
    setPicturesThemed('light')
    colorIcon = <VscColorMode />
    themeIcon = <MdOutlineDarkMode />
  }

  if (mode === 'bwDark') {
    setBwDark()
    setPicturesThemed('dark')
    colorIcon = <VscColorMode />
    themeIcon = <CiLight />
  }

  const toggleTheme = (e) => {
   
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

  const toggleColor = (e) => {
   
    if (storedTheme === 'light' ) {
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

  useEffect(()=>{},[mode])

  return (
    <div className='toggle-theme-wrapper'>
      <span role='img' aria-label='light theme'>
        <div onClick={toggleColor}>{colorIcon}</div>
      </span>
      <span role='img' aria-label='light theme'>
        <div onClick={toggleTheme}>{themeIcon}</div>
      </span>
      <div className='footer-info'>
        <p>
          ©2022 Jan Horak
          <a href='https://github.com/MrJanHorak/portfolio'>
            <FaGithub />
          </a>
        </p>
      </div>
    </div>
  )
}

export default DarkMode
