import React from "react";

import "./PaymentForm.styles.css";

function PaymentForm() {
  return (
    <form className="payment-form">
      <div className="payment-wrapper">
        <h2>Payment</h2>
        <div className="form-field">
          <label className="input-label" htmlFor="card-number">
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            className="input-text"
            placeholder="XXXX XXXX XXXX XXXX"
            required
          />
        </div>
        <div className="form-field">
          <label className="input-label" htmlFor="exp-date">
            Expiration Date
          </label>
          <input
            type="text"
            id="exp-date"
            className="input-text"
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className="form-field">
          <label className="input-label" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="input-text"
            placeholder="123"
            required
          />
        </div>
        <h2 id="delivery-title">Delivery</h2>
        <div className="form-field">
          <label className="input-label" htmlFor="full-name">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="input-text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-field">
          <label className="input-label" htmlFor="street">
            Street
          </label>
          <input
            type="text"
            id="street"
            className="input-text"
            placeholder="Street Address"
            required
          />
        </div>
        <div className="form-field">
          <label className="input-label" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            className="input-text"
            placeholder="City"
            required
          />
        </div>
      </div>
      <p className="total-price">Total Price: $153.00</p>
      <button type="submit" className="pay-button">
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;
