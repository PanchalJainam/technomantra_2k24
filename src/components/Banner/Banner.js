import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { SlCalender } from "react-icons/sl";
import logo from "../../assets/logo/logo.png";

const Banner = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img
            className="into-img"
            src={logo}
            alt=""
            style={{ width: "100%", border: "2px" }}
          />
        </div>
        <div className="content">
          <h1>TECHNOMANTRA</h1>
          <span>2k24</span>
          {/* <img src={bnr} alt="" className="img_bnr"/> */}
          <p className="date1">
            <SlCalender className="cal" />
            19th and 20th March
          </p>
          <p className="addr">
            K.S School Of Business Management and Information Technology,
            <br />
            Gujarat University
          </p>
          <br />
          <div className="reg-btn">
            <Link
              className="btn"
              to="https://tally.so/r/mZ6Pav"
              target="_blank"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
