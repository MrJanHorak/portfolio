import React from "react";

const AboutMe = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="aboutContainer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="about-info">
        <div className="meetJan">
          <img src="./meetJan.png" alt="Jan" />
        </div>
        <div className="aboutMeInfo">
          <p>
            Multicultural, bilingual full stack developer with a background in
            creative communication. Using analytical approaches to solve
            challenging problems bringing a passion for collaboration,
            creativity and compact solutions into each project. With a
            background in leadership and experience in working with people
            through life’s ups and downs, I approach each project with the
            understanding that team members share ownership and valuable input
            so that unique perspectives enrich the final outcome of a project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
