import React, { ChangeEventHandler } from "react";

function setPicturesThemed(colorScheme) {
  // Clean up all existing picture sources that were cloned
  document
    .querySelectorAll("picture > source[data-cloned-theme]")
    .forEach((el) => {
      el.remove();
    });

  if (colorScheme) {
    // Find all picture sources with the desired colour scheme
    document
      .querySelectorAll(
        `picture > source[media*="(prefers-color-scheme: ${colorScheme})"]`
      )
      .forEach((el) => {
        // 1. Clone the given <source>
        // 2. Remove the media attribute so the new <source> is unconditional
        // 3. Add a "data-cloned-theme" attribute to it for future reference / removal
        // 4. Prepend the new <source> to the parent <picture> so it takes precedence
        const cloned = el.cloneNode();
        cloned.removeAttribute("media");
        cloned.setAttribute("data-cloned-theme", colorScheme);
        el.parentNode.prepend(cloned);
      });
  }
}

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

if (defaultDark) {
  setDark();
}


const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
    setPicturesThemed('dark');
  } else {
    setLight();
    setPicturesThemed('light');
  }
};



const DarkMode = () => {

  return (
    <div className="toggle-theme-wrapper">
      <span role="img" aria-label="light theme">☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span role="img" aria-label="dark theme">🌒</span>
    </div>
  );
};

export default DarkMode;