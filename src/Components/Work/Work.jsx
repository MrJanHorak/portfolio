import React from "react";

//components
import ContentCard from "../ContentCard/ContentCard";

//assests
import { work, links, repositories, projectPics } from "../../assests/data.js";

const Work = () => {
  return (
    <div className="work-container">
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
