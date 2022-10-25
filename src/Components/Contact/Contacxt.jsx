import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { IconContext } from "react-icons/lib";

const Contact = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      id="contact-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div id="contact-logo-container">
        <IconContext.Provider value={{ size: "115px" }}>
          <div className="contact">
            <a href="mailto: jan-horak@gmx.de">
              <MdEmail size="100%" />
            </a>
          </div>

          <div className="contact">
            <a href="https://www.linkedin.com/in/jan-horak/">
              <FaLinkedin />
            </a>
          </div>

          <div className="contact">
            <a href="https://github.com/MrJanHorak">
              <FaGithubSquare />
            </a>
          </div>
        </IconContext.Provider>
        <div className="contact">
          <a href="./Horak Resume.pdf">
            <Icon icon="academicons:cv-square" width="100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
