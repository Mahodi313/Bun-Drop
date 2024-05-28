import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.css";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <CartItem key={cartItem.id} cartItem={cartItem} />
              <hr />
            </div>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button onClick={() => navigate("/checkout")}>Go to checkout</button>
    </div>
  );
}

export default CartDropdown;
