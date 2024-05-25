import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav id="navbar">
      <div id="nav-wrapper">
        <Link to="/">
          <img id="logo" src="/public/BUN-DROP.png" />
        </Link>
        <ul id="nav-list">
          <li>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
            <Link className="nav-link" to="/login">
              Sign In
            </Link>
          </li>
          <li>
            <FontAwesomeIcon id="shop-icon" icon={faShoppingCart} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
