import React from "react";

//components
import ContentCard from "../ContentCard/ContentCard";

//assests
import {
  passionProjects,
  passionProjectsLinks,
  passionProjectsRepositories,
  passionProjectPics,
} from "../../assets/data.js";

const Passion = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="work-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="mobileHeaders">Projects</h1>
      <ContentCard
        className="card"
        work={passionProjects}
        links={passionProjectsLinks}
        repositories={passionProjectsRepositories}
        projectPics={passionProjectPics}
      />
    </div>
  );
};

export default Passion;
