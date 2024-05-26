import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar">
      <div id="nav-wrapper">
        <Link to="/">
          <img id="logo" src="/public/BUN-DROP.png" alt="Bun Drop Logo" />
        </Link>
        <div id="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        <ul id="nav-list" className={menuOpen ? "open" : ""}>
          <li>
            <Link
              className="nav-link"
              to="/menu"
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="icon-link">
              <FontAwesomeIcon id="shop-icon" icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
