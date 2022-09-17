import React from "react";

const Landing = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="landing"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <picture>
        <img src="./janHorakPortfolioLogo.png" alt="logo" />
      </picture>
    </div>
  );
};

export default Landing;
