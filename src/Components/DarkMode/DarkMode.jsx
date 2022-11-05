import React, { useState } from 'react';
import { setPicturesThemed } from '../../assests/setPicturesThemed';
import { FaGithub } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { VscColorMode } from 'react-icons/vsc';

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'));

  const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const setColor = () => {
    localStorage.setItem('theme', 'color');
    document.documentElement.setAttribute('data-theme', 'color');
  };

  const setColorDark = () => {
    localStorage.setItem('theme', 'colorDark');
    document.documentElement.setAttribute('data-theme', 'colorDark');
  };

  const storedTheme = localStorage.getItem('theme');

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark);

  let themeIcon = <CiLight />;
  let colorIcon = <IoColorPaletteSharp />;

  if (defaultDark && mode!=="colorDark") {
    setDark();
    setPicturesThemed('dark');
    colorIcon = <IoColorPaletteSharp />;
    themeIcon = <CiLight />;
  }

  if (mode === 'light') {
    setLight();
    setPicturesThemed('light');
    colorIcon = <IoColorPaletteSharp />;
    themeIcon = <MdOutlineDarkMode />;
  }

  if (mode === 'color') {
    setColor();
    setPicturesThemed('color');
    colorIcon = <VscColorMode />;
    themeIcon = <MdOutlineDarkMode />;
  }

  if (mode === 'colorDark') {
    setColorDark();
    setPicturesThemed('color');
    colorIcon = <VscColorMode />;
    themeIcon = <CiLight />;
  }

  const toggleTheme = (e) => {
    if (storedTheme === 'light' || storedTheme === null) {
      setDark();
      setPicturesThemed('dark');
      setMode('dark');
    } else if (storedTheme === 'dark') {
      setLight();
      setPicturesThemed('light');
      setMode('light');
    } else if (storedTheme === 'color') {
      setColorDark();
      setPicturesThemed('color');
      setMode('colorDark');
    } else if (storedTheme === 'colorDark') {
      setColor();
      setPicturesThemed('color');
      setMode('color');
    }
  };

  const toggleColor = (e) => {
    if (storedTheme === 'light') {
      setColor();
      setPicturesThemed('color');
      setMode('color');
      colorIcon = <VscColorMode />;
    } else if (storedTheme === 'dark') {
      setColorDark();
      setPicturesThemed('color');
      setMode('colorDark');
      colorIcon = <VscColorMode />;
    } else if (storedTheme === 'color') {
      setLight();
      setPicturesThemed('light');
      setMode('light');
      colorIcon = <IoColorPaletteSharp />;
    } else if (storedTheme === 'colorDark') {
      setDark();
      setPicturesThemed('dark');
      setMode('dark');
      colorIcon = <IoColorPaletteSharp />;
    }
  };

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
  );
};

export default DarkMode;
