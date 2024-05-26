import React from "react";

import { Link } from "react-router-dom";

import "./Footer.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-section">
          <p className="footer-title">© Bun Drop AB</p>
        </div>
        <div className="footer-section menu-links">
          <p>
            <Link className="nav-links" to="/menu">
              Menu
            </Link>
          </p>
          <p>
            <Link className="nav-links" to="/aboutus">
              About us
            </Link>
          </p>
        </div>
        <div className="footer-section">
          <p>Accepted Payments</p>
          <div className="payment-icons">
            <img src="/public/mastercardfooterlogo.png" alt="MasterCard" />
            <img src="/public/swishfooterlogo.png" alt="OtherCard" />
          </div>
        </div>
        <div className="footer-section contact-details">
          <p>Contact Details</p>
          <p>
            <a href="mailto:Mehdi@bundrop.com">
              <FontAwesomeIcon icon={faEnvelope} /> Mehdi@bundrop.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 070 123 32 100
          </p>
        </div>
        <div className="footer-section">
          <p>Social media</p>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
