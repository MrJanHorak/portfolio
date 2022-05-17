import React, { useRef } from "react";

const Landing = () => {
  const storedTheme = localStorage.getItem("theme");
  let janHorakPortfolioLogo = useRef('')

  if (storedTheme==='light'){
    janHorakPortfolioLogo = "./janHorakPortfolioLogo.png"
  } else {
    janHorakPortfolioLogo = "./janHorakPortfolioLogoInverse.png"
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
