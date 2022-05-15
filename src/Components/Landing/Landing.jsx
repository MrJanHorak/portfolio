import React from "react";

const Landing = () => {
  
  return (
    <div className="landing">
      <picture>
        <source srcSet="./janHorakPortfolioLogo.png" />
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
