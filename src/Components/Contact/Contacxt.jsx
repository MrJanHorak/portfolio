import React from "react";

const Contact = () => {
  return (
    <div id="contact-container">
      <div id="contact-logo-container">
        <div className="contact">
          <a href="mailto: jan-horak@gmx.de">
            <img src="./email.png" alt="email" />
          </a>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/jan-horak/">
            <img alt="linkedIn-logo" src="./linkedIn-logo.png" />
          </a>
        </div>
        <div className="contact">
          <a href="https://github.com/MrJanHorak">
            <img alt="Github logo" src="./gitHubLogo.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
