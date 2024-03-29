import React from "react";

//components
import ContentCard from "../ContentCard/ContentCard";

//assets
import { work, links, repositories, projectPics } from "../../assets/data.js";

const Work = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="work-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      >
      <h1 className="mobileHeaders">Work</h1>
      <ContentCard
        className="card"
        work={work}
        links={links}
        repositories={repositories}
        projectPics={projectPics}
      />
    </div>
  );
};

export default Work;
