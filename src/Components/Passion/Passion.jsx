import React from "react";

//components
import ContentCard from "../ContentCard/ContentCard";

//assests
import {
  passionProjects,
  passionProjectsLinks,
  passionProjectPics,
} from "../../assests/data.js";

const Passion = () => {
  return (
    <div className="work-container">
      <ContentCard
        className="card"
        work={passionProjects}
        links={passionProjectsLinks}
        projectPics={passionProjectPics}
      />
    </div>
  );
};

export default Passion;
