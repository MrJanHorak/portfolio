import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "./ContentCard.css"; // Import the CSS file

const ContentCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project, image) => {
    setCurrentProject(project);
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentProject(null);
  };

  return (
    <div className="slider-card">
      {props.work.map((element, index) => {
        const lines = element.split('\n\n');
        const title = lines.shift(); // Extract the first line as the title
        const description = lines.join('\n\n'); // Join the remaining lines as the description
        const projectPic = props.projectPics[index];

        return (
          <div key={index} className={`card ${index % 2 === 0 ? "card-left" : "card-right"}`}>
            <div className="card-image-wrapper">
              <div className="image-stack">
                {projectPic.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={image} 
                    alt={`${title} - ${imgIndex + 1}`} 
                    className={`project-image ${projectPic.type}`}
                    onClick={() => openModal(projectPic, image)}
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

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={currentImage} alt="Current" className="modal-image" />
            {currentProject.images.length > 1 && (
              <div className="thumbnail-container">
                {currentProject.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={image} 
                    alt={`Thumbnail ${imgIndex + 1}`} 
                    className="thumbnail"
                    onClick={() => setCurrentImage(image)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;