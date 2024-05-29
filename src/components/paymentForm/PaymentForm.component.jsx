import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import { CartContext } from "../../contexts/cart.context";
import { v4 as uuidv4 } from "uuid";
import "./PaymentForm.styles.css";

function PaymentForm() {
  const navigate = useNavigate();
  const { cartTotal, cartItems, clearCart } = useContext(CartContext);
  const { postData } = usePostData();
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    street: "",
    city: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    phoneNumber: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Generates a unique orderId when the component mounts
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderId: uuidv4(),
    }));
  }, []);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length > 0) {
      const orderToSubmit = {
        ...formData,
        products: cartItems,
        paymentMethod,
        totalPrice: cartTotal,
      };

      if (paymentMethod === "card") {
        delete orderToSubmit.phoneNumber;
      } else if (paymentMethod === "swish") {
        delete orderToSubmit.cardNumber;
        delete orderToSubmit.expDate;
        delete orderToSubmit.cvv;
      }

      postData("http://localhost:3000/orders", orderToSubmit)
        .then((data) => {
          clearCart();
          navigate(`/order/${data.orderId}`);
        })
        .catch((error) => {
          console.error("Error adding order:", error);
        });
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="payment-wrapper">
        <h2>Payment</h2>
        <div className="payment-methods">
          <img
            src="/public/mastercardfooterlogo.png"
            alt="Mastercard"
            onClick={() => handlePaymentMethodChange("card")}
            className={`payment-logo ${
              paymentMethod === "card" ? "selected" : ""
            }`}
          />
          <img
            src="/public/swishfooterlogo.png"
            alt="Swish"
            onClick={() => handlePaymentMethodChange("swish")}
            className={`payment-logo ${
              paymentMethod === "swish" ? "selected" : ""
            } secondLogo`}
          />
        </div>
        {paymentMethod === "card" && (
          <>
            <div className="form-field">
              <label className="input-label" htmlFor="card-number">
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                name="cardNumber"
                className="input-text"
                placeholder="XXXX XXXX XXXX XXXX"
                value={formData.cardNumber}
                onChange={handleChange}
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
                name="expDate"
                className="input-text"
                placeholder="MM/YYYY"
                value={formData.expDate}
                onChange={handleChange}
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
                name="cvv"
                className="input-text"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {paymentMethod === "swish" && (
          <div className="form-field">
            <label className="input-label" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              className="input-text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <h2 id="delivery-title">Delivery</h2>
        <div className="form-field">
          <label className="input-label" htmlFor="full-name">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="customerName"
            className="input-text"
            placeholder="Full Name"
            value={formData.customerName}
            onChange={handleChange}
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
            name="street"
            className="input-text"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
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
            name="city"
            className="input-text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <p className="total-price">Total Price: ${cartTotal}</p>
      <button type="submit" className="pay-button">
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;
