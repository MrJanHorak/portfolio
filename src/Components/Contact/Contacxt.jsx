import React, { useRef } from "react";

const Contact = () => {
  const storedTheme = localStorage.getItem("theme");
  let email = useRef("./email.png");
  let linkedIn = useRef("./linkedIn-logo.png");
  let gitHub = useRef("./gitHubLogo.png");
  let resume = useRef("./resumeIcon.png");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (storedTheme === "light" || (storedTheme === null && prefersLight)) {
    email = "./email.png";
    linkedIn = "./linkedIn-logo.png";
    gitHub = "./gitHubLogo.png";
    resume = "./resumeIcon.png";
  } else {
    email = "./emailInvert.png";
    linkedIn = "./linkedIn-logoInverse.png";
    gitHub = "./gitHubLogoInverse.png";
    resume = "./resumeIconInvert.png";
  }

  return (
    <div id="contact-container">
      <div id="contact-logo-container">
        <div className="contact">
          <a href="mailto: jan-horak@gmx.de">
            <picture>
              <source srcSet={email} />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="./email.png"
              />
              <source
                srcSet="./emailInvert.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src={email} alt="email" />
            </picture>
          </a>
        </div>

        <div className="contact">
          <a href="https://www.linkedin.com/in/jan-horak/">
            <picture>
              <source srcSet={linkedIn} />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="./linkedIn-logo.png"
              />
              <source
                srcSet="./linkedIn-logoInverse.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src={linkedIn} alt="linkedIn-logo" />
            </picture>
          </a>
        </div>

        <div className="contact">
          <a href="https://github.com/MrJanHorak">
            <picture>
              <source srcSet={gitHub} />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="./gitHubLogo.png"
              />
              <source
                srcSet="./gitHubLogoInverse.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src={gitHub} alt="Github logo" />
            </picture>
          </a>
        </div>

        <div className="contact">
          <a href="./Horak Resume.pdf">
            <picture>
              <source srcSet={resume} />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="./resumeIcon.png"
              />
              <source
                srcSet="./resumeIconInvert.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src={resume} alt="resume" />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
