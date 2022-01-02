import React from 'react';

//components
import ContentCard from "../ContentCard/ContentCard";

//assests
import { passionProjects, passionProjectsLinks, passionProjectPics, } from "../../assests/data.js";

const Passion = () => {
  return (
    <div className='work-container'>
      <br/><br/>These are passion projects and project ideas I am working on on the side and as I have time.<br/><br/>
      <ContentCard
        className="card"
        work={passionProjects}
        links={passionProjectsLinks}
        projectPics={passionProjectPics}
      />
    </div>
  )
}

export default Passion