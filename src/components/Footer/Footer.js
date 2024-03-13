import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-basic">
          <div class="container">
            <h2>TechnoMantra 2024</h2>
          </div>

          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="/service">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="/about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="/events">Events</a>
            </li>
          </ul>
          <div className="cpright">
            <p class="copyright">
              © 2024-2025 Technomantra, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
