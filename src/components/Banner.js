import React from "react";

const Banner = () => {
  return (
    <>
      <div className="app-title">Calculator</div>
      <div className="banner-holder">
        <div className="banner-text">
          Wanna Solve Something ?? <br />
          Here it comes 😎 <br />❄ Let's Solve Together ❄
        </div>
        <img
          className="banner"
          src={require("../assets/speech-bubble.png")}
          alt="speech-bubble"
        />
        <img
          className="banner-image"
          src={require("../assets/banner-image.png")}
          alt="banner"
        />
      </div>
    </>
  );
};

export default Banner;
