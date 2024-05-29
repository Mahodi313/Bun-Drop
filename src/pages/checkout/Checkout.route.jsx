import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import PaymentForm from "../../components/paymentForm/PaymentForm.component";

import { CartContext } from "../../contexts/cart.context";

import "./Checkout.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="checkout-wrapper">
        <FontAwesomeIcon
          id="back-icon"
          icon={faCircleArrowLeft}
          onClick={() => navigate(-1)}
        />
        <div className="items-wrapper">
          <h2 className="shopping-title">Shopping cart</h2>
          {cartItems.length ? (
            cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <PaymentForm />
      </div>
    </>
  );
}

export default Checkout;
