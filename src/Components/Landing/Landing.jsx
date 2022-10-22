import React from "react";
import { MdOutlineSwipe } from 'react-icons/md'

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

      <div className="attentionGraber"><h1> <MdOutlineSwipe/></h1></div>
    </div>
  );
};

export default Landing;
