import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "./ContentCard.css"; // Import the CSS file

const ContentCard = (props) => {
  return (
    <div className="slider-card">
      {props.work.map((element, index) => {
        const lines = element.split('\n\n');
        const title = lines.shift(); // Extract the first line as the title
        const description = lines.join('\n\n'); // Join the remaining lines as the description
        const projectPic = props.projectPics[index];

        return (
          <div key={index} className={`card ${index % 2 === 0 ? "card-left" : "card-right"}`}>
            <div className={`card-image-wrapper ${projectPic.type}`}>
              <div className="image-stack">
                {projectPic.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={image} 
                    alt={`${title} - ${imgIndex + 1}`} 
                    className="project-image"
                  />
                ))}
              </div>
            </div>
            <div className="card-info">
              <h3>{title}</h3>
              <p>{description}</p>
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
        );
      })}
    </div>
  );
};

export default ContentCard;