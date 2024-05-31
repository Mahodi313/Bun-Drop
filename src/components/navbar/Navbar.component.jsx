import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { AuthContext } from "../../contexts/auth.context";

import CartIcon from "../cart-icon/Cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./Navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isCartOpen } = useContext(CartContext);
  const { user, signOut } = useContext(AuthContext);

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

          {user ? (
            <>
              <li>
                <Link className="nav-link" to="#" onClick={() => signOut()}>
                  Sign Out
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                className="nav-link"
                to="/auth"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          )}
          <CartIcon id="shop-icon" />
        </ul>
        {isCartOpen && <CartDropdown />}
      </div>
    </nav>
  );
}

export default Navbar;
