import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ContentCard = (props) => {
  return (
    <div className="slider-card">
      {props.work.map((element, index) => (
        <div key={index} className="card">
          <div className="card-image-wrapper">
            {/* <div className="card-image"> */}
              {/* <img
                src={props.projectPics[index]}
                alt="project"
                className="project-image"
              /> */}
            {/* </div> */}
             <div className="image-stack">
             {props.projectPics[index].map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`${element.title} - ${index + 1}`} 
            className="project-image"
          />
        ))}
      </div>
          </div>
          <div className="card-info">
            <h3>{element}</h3>
            {props.links[index] ? (
              <a
                href={props.links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink /> Explore the site
              </a>
            ) : (
              <p>Link coming soon!</p>
            )}
            <br />
            {props.repositories[index] ? (
              <a
                href={props.repositories[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Explore the code
              </a>
            ) : (
              <p>Repository coming soon!</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
