import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ContentCard = (props) => {
  return (
    <div className="slider-card">
      {props.work.map((element, index) => (
        <div key={1 + index} className="card">
          <div className="card-info" key={index}>
            {element}
            <br />
            <br />
            {props.links[index] !== "" ? (
              <a
                key={20 + index}
                href={props.links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink /> explore the site
              </a>
            ) : (
              <>
                <FaLink /> Link coming soon!
              </>
            )}
            <br />
            {props.repositories[index] !== "" ? (
              <a
                key={22 + index}
                href={props.repositories[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> explore the code
              </a>
            ) : (
              <>
                <FaLink /> Link coming soon!
              </>
            )}
          </div>
          {props.links[index] !== "" ? (
            <div key={30 + index} className="card-image">
              <a
                href={props.links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-image"
                  src={props.projectPics[index]}
                  alt="passed-project"
                />
              </a>
            </div>
          ) : (
            <div key={30 + index} className="card-image">
              <img
                className="card-image"
                src={props.projectPics[index]}
                alt="passion-project"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
