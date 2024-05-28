import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";

import "./Cart-icon.styles.css";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <li className="nav-item cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </li>
  );
}

export default CartIcon;
