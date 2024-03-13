import React, { useState } from "react";
import "./Gallary.css";
import Slider from "react-slick";

import i1 from "../../../assets/gallary/i1.JPG";
import i2 from "../../../assets/gallary/i2.JPG";
import i3 from "../../../assets/gallary/i3.JPG";
// import i4 from "../../../assets/gallary/i4.JPG";
import i5 from "../../../assets/gallary/i5.JPG";
import i6 from "../../../assets/gallary/i6.JPG";
import i7 from "../../../assets/gallary/i7.JPG";
import i8 from "../../../assets/gallary/i8.JPG";
import i9 from "../../../assets/gallary/i9.JPG";
import i10 from "../../../assets/gallary/i10.JPG";
import i13 from "../../../assets/gallary/i13.JPG";
import i14 from "../../../assets/gallary/i14.JPG";
import i15 from "../../../assets/gallary/i15.JPG";
import i16 from "../../../assets/gallary/i16.JPG";
import i17 from "../../../assets/gallary/i17.JPG";

// import i8 from "../../../assets/i9.jpg";
// import i9 from "../../../assets/i9.jpg";
// import i10 from "../../../assets/i10.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  i1,
  i2,
  i3,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i13,
  i14,
  i15,
  i16,
  i17,
];

const Gallary = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} style={{ zIndex: "1000" }}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next, prev) => {
      if (next) setImageIndex(next);
      else setImageIndex(current);
    },
  };

  return (
    <>
      <br />
      <br />
      <div className="gallary-main">
        <h1>Gallery</h1>
        <p>Some Immemorable Memorries</p>
      </div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Gallary;
