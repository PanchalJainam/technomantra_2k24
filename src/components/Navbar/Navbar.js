import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import txt_logo from "../../assets/logo/text_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "space-between",
              overflow: "hidden",
            }}
          >
            <img
              className="into-img"
              src={logo}
              alt=""
              style={{ width: "60px", height: "auto", border: "2px" }}
            />

            <img className="into-img" src={txt_logo} alt="" />
          </div>
        </Link>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link></Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              smooth={true}
              offset={200}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {menuOpen ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
