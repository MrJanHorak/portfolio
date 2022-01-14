import Slider from "infinite-react-carousel/lib";
import React from "react";

const ContentCard = (props) => {
  const settings = {
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 8000,
    arrowsBlock: false,
    centerMode: true,
    centerPadding: 0,
    className: "slider",
    dots: true,
    wheelScroll: 2,
  };

  return (
    <Slider {...settings}>
      {props.work.map((element, index) => (
        <div key={1 + index} className="card">
          <div className="card-info" key={index}>
            {element}
            <br />
            <br />
            {props.links[index] !== "" ? (
              <a key={20 + index} href={props.links[index]}>
                Visit Site
              </a>
            ) : (
              "Link coming soon!"
            )}
          </div>
          {props.links[index] !== "" ? (
            <div key={30 + index} className="card-image">
              <a href={props.links[index]}>
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
    </Slider>
  );
};

export default ContentCard;
