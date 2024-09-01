import React from "react";

const HeroSection = () => {
  return (
    <header className="h-screen flex">
      <video
        loop
        muted
        style={{
          cursor: "auto",

          width: "100%",
          height: "100%",
          borderRadius: "0px",
          display: "block",
          objectFit: "cover",
          backgroundColor: "rgba(0,0,0,0)",
          objectPosition: "50% 50%",
        }}
        autoPlay
      >
        <source src="./hero-video.mp4" type="video/mp4" />
      </video>
    </header>
  );
};

export default HeroSection;
