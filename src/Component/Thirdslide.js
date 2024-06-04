import React from "react";
import Ringmobile from "../Images/ringMobile.png";

import bellicon from "../Images/bell.png";
import "aos/dist/aos.css";

import "../Componentstyle/Thirdslide.css";
const Thirdslide = () => {
  return (
    <div className="main">
      <div data-aos="fade-right" data-aos-duration="1000" className="sometext">
        <h6>ADVANTAGES</h6>
        <h1>Why Choose Uifry?</h1>
        <h4>
          <img className="bell-icon" src={bellicon} alt="circle-rings" /> Clever
          Notifications
        </h4>
        <p>
          Et exercitation occaecat labore qui veniam pariatur magna non
          <br /> Lorem. Cillum in excepteur nostrud cillum irure ex aute <br />{" "}
          officia tempor amet velit deserunt. Enim sit nostrud
          <br /> aliquip mollit aute incididunt duis eu minim eu. Cillum .
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="ringmobile-container"
      >
        <img className="ring-mobile" src={Ringmobile} alt="circle-rings" />
      </div>
    </div>
  );
};

export default Thirdslide;
