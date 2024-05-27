import React from "react";

import { Link } from "react-router-dom";

import "./Product.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  return (
    <>
      <div className="product">
        <Link to={`product/${props.product.id}`}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </Link>
        <img src={props.product.image} alt={props.product.title} />
        <h4>{props.product.title}</h4>
        <p>$ {props.product.price}</p>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default Product;
