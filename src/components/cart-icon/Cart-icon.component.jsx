import React from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import "./Cart-icon.styles.css";

function CartIcon() {
  return (
    <li className="nav-item cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </li>
  );
}

export default CartIcon;
