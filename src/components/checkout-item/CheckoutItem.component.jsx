import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./CheckoutItem.styles.css";

function CheckoutItem(props) {
  const { addItemToCart, removeProduct, clearItemFromCart } =
    useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={props.item.image} alt={props.item.title} />
      <h3>{props.item.title}</h3>
      <p>${props.item.price}</p>
      <div className="quantity-wrapper">
        <button onClick={() => removeProduct(props.item)}>-</button>
        <input
          type="number"
          className="quantity-input"
          value={props.item.quantity}
          readOnly
        />
        <button onClick={() => addItemToCart(props.item)}>+</button>
      </div>
      <button
        onClick={() => clearItemFromCart(props.item)}
        className="remove-button"
      >
        X
      </button>
    </div>
  );
}

export default CheckoutItem;
