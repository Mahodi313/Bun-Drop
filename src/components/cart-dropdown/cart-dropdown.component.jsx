import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.css";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <>
              <CartItem key={cartItem.id} cartItem={cartItem} />
              <hr />
            </>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button>GO TO CHECKOUT</button>
    </div>
  );
}

export default CartDropdown;
