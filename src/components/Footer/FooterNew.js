import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/nav_logo.png";
// import text from "../../assets/logo/text_logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import loc from "../../assets/location.jpeg";
import { FaFacebookSquare } from "react-icons/fa";

const FooterNew = () => {
  return (
    <>
      <div className="footer-main">
        <div className="ft_main">
          <div className="ft_logo">
            <div>
              <img src={logo} alt="logo" />
            </div>
            {/* <div className="txt_logo">
              <img src={text} alt="text" />
            </div> */}
          </div>
          <div className="ft_links">
            <h2>Links</h2>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/events">
                <li>Events</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
            </ul>
          </div>
          <div className="tech_list">
            <h2>Social Media</h2>
            <div className="social_icon">
              <Link to="https://www.instagram.com/technomantra2k24?igsh=MW9uMXg4c3R0eGps">
                <p>
                  <FaInstagram />
                </p>
              </Link>
              <Link to="https://www.linkedin.com/in/placecom-ks-8a0a961b6/">
                <p>
                  <FaLinkedin />
                </p>
              </Link>
              <Link to="https://www.linkedin.com/in/placecom-ks-8a0a961b6/">
                <p>
                  <FaFacebookSquare />
                </p>
              </Link>
            </div>
          </div>
          <div className="non_tech_list">
            <h2>Location</h2>
            <p>
              K.S School of business Managemant &
              <br />
              information technology, Gujarat University
            </p>
            <div className="ft_logo2">
              <div>
                <img src={loc} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="cpright">
          <p class="copyright">
            © 2024-2025 Technomantra, All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
