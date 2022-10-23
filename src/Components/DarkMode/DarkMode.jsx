import React, { useEffect, useState } from "react";
import { setPicturesThemed } from "../../assests/setPicturesThemed";
import { FaGithub } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  let themeIcon = <CiLight />;

  if (defaultDark) {
    setDark();
    setPicturesThemed("dark");
    themeIcon = <MdOutlineDarkMode />;
  }

  const toggleTheme = (e) => {
    if (storedTheme === "light") {
      setDark();
      setPicturesThemed("dark");
      setMode("dark");
      themeIcon = <MdOutlineDarkMode />;
    } else {
      setLight();
      setPicturesThemed("light");
      setMode("light");
      themeIcon = <CiLight />;
    }
  };

  // useEffect(() => {console.log(mode)}, [mode]);

  return (
    <div className="toggle-theme-wrapper">
      {/* <IoColorPaletteSharp /> */}
      <span role="img" aria-label="light theme">
        <div onClick={toggleTheme}>{themeIcon}</div>
      </span>
      {/* <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label> */}
      {/* <span role="img" aria-label="dark theme">
        <MdOutlineDarkMode />
      </span> */}
      <div className="footer-info">
        <p>
          ©2022 Jan Horak
          <a href="https://github.com/MrJanHorak/portfolio">
            <FaGithub />
          </a>
        </p>
      </div>
    </div>
  );
};

export default DarkMode;
