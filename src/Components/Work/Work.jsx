import React from "react";

//components
import ContentCard from "../ContentCard/ContentCard";

//assests
import { work, links, repositories, projectPics } from "../../assests/data.js";

const Work = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      className="work-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
