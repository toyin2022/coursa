import React from "react";
import { DiCss3Full, DiHtml5, DiJavascript1, DiNodejs } from "react-icons/di";

const SecondSection = () => {
  return (
    <div className="features">
      <div className="cube">
        <div className="icon">
          <DiHtml5 size={28} />
        </div>
        <p style={{ fontWeight: "bold" }}>Learn HTML</p>
      </div>
      <div className="cube">
        <div className="icon">
          <DiCss3Full size={28} />
        </div>
        <p style={{ fontWeight: "bold" }}>Learn CSS</p>
      </div>
      <div className="cube">
        <div className="icon">
          <DiJavascript1 size={28} />
        </div>
        <p style={{ fontWeight: "bold" }}> JavaScript</p>
      </div>
      <div className="cube">
        <div className="icon">
          <DiNodejs size={28} />
        </div>
        <p style={{ fontWeight: "bold" }}> Node Js</p>
      </div>
    </div>
  );
};

export default SecondSection;
