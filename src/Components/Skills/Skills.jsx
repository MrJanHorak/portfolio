import React from "react";
import images from "../../assests/skills";

const Skills = () => {
  return (
    <div id="skills-container">
      <div id="gallery-container">
        {images.map((img, index) => (
          <div key={100+index}>
            <img key={index} src={img} alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
