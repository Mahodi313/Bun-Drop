import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import { v4 as uuidv4 } from "uuid";
import "./PaymentForm.styles.css";

function PaymentForm(props) {
  const { cartTotal, cartItems } = useContext(CartContext);
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
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    if (formData.customerName.trim() === "") {
      newErrors.customerName = "Full name is required";
    }
    if (formData.street.trim() === "") {
      newErrors.street = "Street adress is required.";
    }
    if (formData.city.trim() === "") {
      newErrors.city = "City is required.";
    }

    if (paymentMethod === "card") {
      if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = "Card Number must be 16 digits.";
      }
      if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(formData.expDate)) {
        newErrors.expDate = "Expiration Date must be in MM/YYYY format.";
      }
      if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 or 4 digits.";
      }
    } else if (paymentMethod === "swish") {
      if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Phone Number must be 10 digits.";
      }
    }

    setErrors(newErrors);
    // This checks if there are any errors and returns true or false.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length > 0 && validateForm()) {
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

      props.onHandleOrder(orderToSubmit);
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
              />
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber}</p>
              )}
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
              />
              {errors.expDate && <p className="error">{errors.expDate}</p>}
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
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
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
              placeholder="0760006591"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
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
          />
          {errors.customerName && (
            <p className="error">{errors.customerName}</p>
          )}
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
          />
          {errors.street && <p className="error">{errors.street}</p>}
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
          />
          {errors.city && <p className="error">{errors.city}</p>}
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
