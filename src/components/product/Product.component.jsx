import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import "./Product.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      <div className="product">
        <Link to={`/product/${props.product.id}`}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </Link>
        <img src={props.product.image} alt={props.product.title} />
        <h4>{props.product.title}</h4>
        <p>$ {props.product.price}</p>
        <button onClick={() => addItemToCart(props.product)}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Product;
