import React from "react";
import skills from "../../assests/skills";

const Skills = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      id="skills-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="mobileHeaders">Skills</h1>
      <div id="gallery-container">
        {skills.map((img, index) => (
          <div key={100 + index}>
            <img key={index} src={img} alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
