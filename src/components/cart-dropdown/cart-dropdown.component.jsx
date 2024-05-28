import React from "react";

import "./cart-dropdown.styles.css";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <button>Checkout</button>
    </div>
  );
}

export default CartDropdown;
