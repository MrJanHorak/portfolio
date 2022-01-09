import React from "react";
import skills from "../../assests/skills";

const Skills = () => {
  return (
    <div id="skills-container">
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
