import React from "react";
import "./styles/homepage.css";
import HeadSection from "../components/HeadSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
const HomePage = () => {
  return (
    <div style={{ width: "99vw" }}>
      <HeadSection />
      <div className="texts">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          corporis deserunt modi eum dolore soluta?
        </p>
      </div>
      <SecondSection />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.3rem" }}>
          A broad selection of course
        </h3>
        <p>
          Choose from over 2,100 online video courses with new additions
          published every month. Go from absolute beginner to expert in few
          weeks. <br /> Begin your journey right here with these recorded
          courses
        </p>
      </div>
      <ThirdSection />
    </div>
  );
};

export default HomePage;
