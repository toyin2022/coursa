import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../App.css";

import "slick-carousel/slick/slick-theme.css";
import img1 from "../slideImage/js.png";
import img2 from "../slideImage/internet-services-1280.png";
import img3 from "../slideImage/intvsweb.png";
import img4 from "../slideImage/jsworks.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="cent">
      <div
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <img src={img1} style={{ zIndex: 1 }} width={300} height={200} alt="" />
      </div>
      <div>
        <img src={img2} width={300} height={200} alt="" />
      </div>
      <div>
        <img src={img3} width={300} height={200} alt="" />
      </div>
      <div>
        <img src={img4} width={300} height={200} alt="" />
      </div>
    </Slider>
  );
}
