import React, { useRef } from "react";

const Landing = () => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  let janHorakPortfolioLogo = useRef("");

  if (storedTheme === "light" || (storedTheme === null && prefersLight)) {
    janHorakPortfolioLogo = "./janHorakPortfolioLogo.png";
  } else {
    janHorakPortfolioLogo = "./janHorakPortfolioLogoInverse.png";
  }

  return (
    <div className="landing">
      <picture>
        <source srcSet={janHorakPortfolioLogo} />
        <source
          media="(prefers-color-scheme: light)"
          srcSet="./janHorakPortfolioLogo.png"
        />
        <source
          srcSet="./janHorakPortfolioLogoInverse.png"
          media="(prefers-color-scheme: dark)"
        />
        <img src="./janHorakPortfolioLogo.png" alt="logo" />
      </picture>
    </div>
  );
};

export default Landing;
