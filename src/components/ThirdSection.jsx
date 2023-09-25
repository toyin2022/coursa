import React, { useEffect, useState } from "react";
import {
  HtmlCourses,
  CssCourses,
  JavaScriptCourses,
  NodeCourses,
} from "../Data.js";
import ContentCard from "./ContentCard.jsx";

const ThirdSection = () => {
  const [activePill, setActivePill] = useState("HTML");
  const [category, setcategory] = useState([]);
  useEffect(() => {
    if (activePill === "HTML") {
      setcategory(HtmlCourses);
    } else if (activePill === "CSS") {
      setcategory(CssCourses);
    } else if (activePill === "JAVASCRIPT") {
      setcategory(JavaScriptCourses);
    } else setcategory(NodeCourses);
  }, [activePill]);

  return (
    <div className="third">
      <div className="pills">
        <div
          className={`pill ${activePill === "HTML" ? "active" : ""}`}
          onClick={() => setActivePill("HTML")}
        >
          HTML
        </div>
        <div
          className={`pill ${activePill === "CSS" ? "activeC" : ""}`}
          onClick={() => setActivePill("CSS")}
        >
          CSS
        </div>
        <div
          className={`pill ${activePill === "JAVASCRIPT" ? "activeJ" : ""}`}
          onClick={() => setActivePill("JAVASCRIPT")}
        >
          JAVASCRIPT
        </div>
        <div
          className={`pill ${activePill === "NODE JS" ? "activeN" : ""}`}
          onClick={() => setActivePill("NODE JS")}
        >
          NODE JS
        </div>
      </div>
      <div className="contents-container">
        <div className="contents">
          {category?.map((details) => (
            <div className="cat-card" key={details.id}>
              <ContentCard details={details} activePill={activePill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
