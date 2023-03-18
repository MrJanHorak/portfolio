import React, { useState } from 'react';
import { setPicturesThemed } from '../../assets/setPicturesThemed';
import { FaGithub } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { VscColorMode } from 'react-icons/vsc';

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'));

  const setBwDark = () => {
    localStorage.setItem('theme', 'bwDark');
    document.documentElement.setAttribute('data-theme', 'bwDark');
  };

  const setBwLight = () => {
    localStorage.setItem('theme', 'bwLight');
    document.documentElement.setAttribute('data-theme', 'bwLight');
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
    storedTheme === 'colorDark' ;

  let themeIcon = <CiLight />;
  let colorIcon = <IoColorPaletteSharp />;

  if (defaultDark && mode!=="colorDark") {
    setBwDark();
    setPicturesThemed('dark');
    colorIcon = <IoColorPaletteSharp />;
    themeIcon = <CiLight />;
  }

  if (mode === 'bwLight') {
    setBwLight();
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

  if (mode === 'colorDark' ) {
    setColorDark();
    setPicturesThemed('color');
    colorIcon = <VscColorMode />;
    themeIcon = <CiLight />;
  }

  const toggleTheme = (e) => {
    if (storedTheme === 'bwLight' ) {
      setBwDark();
      setPicturesThemed('bwDark');
      setMode('bwDark');
    } else if (storedTheme === 'bwDark') {
      setBwLight();
      setPicturesThemed('bwLight');
      setMode('bwLight');
    } else if (storedTheme === 'color' ) {
      setColorDark();
      setPicturesThemed('color');
      setMode('colorDark');
    } else if (storedTheme === 'colorDark' || storedTheme === null) {
      setColor();
      setPicturesThemed('color');
      setMode('color');
    }
  };

  const toggleColor = (e) => {
    if (storedTheme === 'bwLight') {
      setColor();
      setPicturesThemed('color');
      setMode('color');
      colorIcon = <VscColorMode />;
    } else if (storedTheme === 'bwDark') {
      setColorDark();
      setPicturesThemed('color');
      setMode('colorDark');
      colorIcon = <VscColorMode />;
    } else if (storedTheme === 'color') {
      setBwLight();
      setPicturesThemed('light');
      setMode('bwLight');
      colorIcon = <IoColorPaletteSharp />;
    } else if (storedTheme === 'colorDark') {
      setBwDark();
      setPicturesThemed('dark');
      setMode('bwDark');
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
