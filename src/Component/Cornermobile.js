import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Componentstyle/Cornermobile.css";
import Mobileimg from "../Images/mobile.png";
import strip from "../Images/strip.png";
import pausebtn from "../Images/pausebtn.png";
const Cornermobile = () => {
  AOS.init({
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <div className="container">
      <div id="main-div">
        <img
          id="img1"
          data-aos="fade-up"
          data-aos-duration="1000"
          src={Mobileimg}
          alt="img"
        />
        <img
          id="img2"
          data-aos="fade-up"
          data-aos-duration="2000"
          src={Mobileimg}
          alt="img"
        />
        <img
          id="img3"
          data-aos="fade-up"
          data-aos-duration="3000"
          src={Mobileimg}
          alt="img"
        />
      </div>

      <div className="text-and-image">
        <h1>
          Make The Best <br /> Financial Decisions
        </h1>
        <p>
          Excepteur tempor sunt amet in cupidatat labore <br /> Deserunt et
          laboris is mollit non is mollit no{" "}
        </p>
        <div
          id="btn-sets"
          style={{
            height: 100 + "%",
            width: 62 + "%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <button className="getstarted-btn">Get Started →</button>
          <span
            className="pause-btn-and-text"
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <img className="pause-btn" src={pausebtn} alt="pause-btn" /> Watch
            Video
          </span>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="strip"
          src={strip}
          alt="strip-image"
        />
      </div>
    </div>
  );
};

export default Cornermobile;
