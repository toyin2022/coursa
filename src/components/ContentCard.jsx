import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const ContentCard = ({ details, activePill }) => {
  return (
    <div className="card">
      <div className="card-cont">
        <div
          style={{
            borderBottom: "5px solid",
            borderBottomColor:
              activePill === "HTML"
                ? "red"
                : "" | (activePill === "CSS")
                ? "blue"
                : "" | (activePill === "JAVASCRIPT")
                ? "rgb(197, 168, 0)"
                : "" | (activePill === "NODE JS")
                ? "rgb(0, 168, 0)"
                : "",
          }}
          className="title"
        >
          <h3>{details.title}</h3>
        </div>
        <p>{details.description}</p>
        <Link to={"https://www.youtube.com/"}>go to youtube</Link>
      </div>
    </div>
  );
};

export default ContentCard;
