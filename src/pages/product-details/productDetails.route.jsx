import { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import useFetchData from "../../hooks/useFetchData";

import { CartContext } from "../../contexts/cart.context";

import "./productDetails.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetchData(`http://localhost:3000/menu/${id}`);

  const { addItemToCart } = useContext(CartContext);

  if (loading) return <div className="product-loading">Loading...</div>;
  if (error)
    return <div className="product-error">Error loading product details</div>;

  return (
    <div className="product-details-wrapper">
      <button className="product-go-back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <button
          className="product-add-to-cart"
          onClick={() => addItemToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
