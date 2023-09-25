import React from "react";

import { Typewriter } from "react-simple-typewriter";

const HeadSection = () => {
  return (
    <div className="homepage">
      <div className="home-container">
        <h1 className="top-header">
          Register today and get
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["10%", "20%", "30%"]}
              loop={10}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <span style={{ color: "white" }}>off</span>
          </span>
        </h1>
        <button className="get-started">Get started</button>
      </div>
    </div>
  );
};

export default HeadSection;
