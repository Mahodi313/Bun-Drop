import React from "react";

import "./CheckoutItem.styles.css";

function CheckoutItem(props) {
  return (
    <div className="cart-item">
      <img src={props.item.image} alt={props.item.title} />
      <h3>{props.item.title}</h3>
      <p>${props.item.price}</p>
      <div className="quantity-wrapper">
        <button onClick={() => decreaseQuantity(props.item)}>-</button>
        <input
          type="number"
          className="quantity-input"
          value={props.item.quantity}
          readOnly
        />
        <button onClick={() => increaseQuantity(props.item)}>+</button>
      </div>
      <button
        onClick={() => removeItemFromCart(props.item)}
        className="remove-button"
      >
        X
      </button>
    </div>
  );
}

export default CheckoutItem;
