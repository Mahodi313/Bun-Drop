import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import useFetchData from "../../hooks/useFetchData";

import "./confirmation.styles.css";

function Confirmation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deliveryTime, setDeliveryTime] = useState("");

  const {
    data: order,
    loading,
    error,
  } = useFetchData(`http://localhost:3000/orders/${id}`);

  //This generates a random delivery time between 15 and 60 minutes
  useEffect(() => {
    const minTime = 15;
    const maxTime = 60;
    const deliveryTime =
      Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    setDeliveryTime(`${deliveryTime} minutes`);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading order details</div>;

  return (
    <div className="confirmation-wrapper">
      <h1 className="confirmation-title">Order Confirmation</h1>
      <div className="confirmation-details">
        <h2>Order ID: {order.orderId}</h2>
        <p>
          <strong>Customer:</strong> {order.customerName}
        </p>
        <p>
          <strong>Address:</strong> {order.street}, {order.city}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>
        <h3>Order Summary:</h3>
        <ul className="confirmation-products">
          {order.products.map((product) => (
            <li key={product.id} className="confirmation-product-item">
              <img
                src={product.image}
                alt={product.title}
                className="confirmation-product-image"
              />
              <div>
                <p>
                  {product.title} x {product.quantity}
                </p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total Price: ${order.totalPrice.toFixed(2)}</h3>
      </div>
      <div className="confirmation-message">
        <h2>Your order is on its way!</h2>
        <p>Estimated delivery time: {deliveryTime}</p>
      </div>
      <button className="confirmation-go-back" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default Confirmation;
