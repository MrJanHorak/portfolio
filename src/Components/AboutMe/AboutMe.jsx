import React, { useRef } from "react";

const AboutMe = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  const storedTheme = localStorage.getItem("theme");
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
    let jan = useRef("./meetJan.png");

    if (storedTheme === "light" || (storedTheme === null && prefersLight)) {
      jan = "./meetJan.png";
    } else if (storedTheme === "dark" || (storedTheme === null && prefersLight)){
      jan = "./meetJan.png";
    } else if (storedTheme === "color"){
      jan = "./meetJanColor.png";
    }

  return (
    <div
      className="aboutContainer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="about-info">
        <h1 className="mobileHeaders">Meet Jan</h1>
        <div className="meetJan">
        <picture>
              <source srcSet={jan} />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="./meetJan.png"
              />
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="./meetJan.png"
              />
              <source
                srcSet="./meetJanColor.png"
                media="(prefers-color-scheme: color)"
              />
              <img src={jan} alt="Jan" />
            </picture>
        </div>
        <div className="aboutMeInfo">
          <p>
            Multicultural, bilingual full stack developer with a background in
            creative communication. Using analytical approaches to solve
            challenging problems bringing a passion for collaboration,
            creativity and compact solutions into each project. With a
            background in leadership and experience in working with people
            through life’s ups and downs, I approach each project with the
            understanding that team members share ownership and valuable input
            so that unique perspectives enrich the final outcome of a project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
