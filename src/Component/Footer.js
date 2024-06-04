import React from "react";
import "../Componentstyle/Footer.css";
import uifrylogo from "../Images/uifry-logo.webp";
const Footer = () => {
  return (
    <>
      <div className="footer-components">
        <div className="section-1">
          {" "}
          <img src={uifrylogo} alt="logo" /> <h3>uifry</h3>{" "}
          <p>Help@Frybix.com</p> <p>+123&nbsp;456&nbsp;789&nbsp;789</p>{" "}
        </div>
        <div className="section-2">
          <h3>Links</h3> <p>Home</p> <p>About us</p> <p>Booklinks</p>{" "}
        </div>
        <div className="section-3">
          <h3>Legal</h3> <p>Terms Of Use</p> <p>Privacy Policy</p>{" "}
          <p>Cooide Policy</p>{" "}
        </div>
        <div className="section-4">
          <h3>Products</h3> <p>Take Tour</p> <p>Live Chat</p> <p>Reviews</p>{" "}
        </div>
        <div className="section-5">
          <h3>Newsletter</h3> <p>Stay Up To Date</p> <p>Your email</p>{" "}
          <button>Subscribe</button>
        </div>
        <hr />
      </div>
      <p className="copyrignt-message">
        Copyright 2022 Uifry.Com All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
