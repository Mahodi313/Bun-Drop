import React from "react";

import "./favorite-item.styles.css";

function FavoriteItem(props) {
  return (
    <>
      <div className="favorite-item">
        <img
          src={props.favorite.image}
          alt={props.favorite.title}
          className="favorite-item-image"
        />
        <div className="favorite-item-details">
          <h3>{props.favorite.title}</h3>
          <p>{props.favorite.description}</p>
          <p>${props.favorite.price}</p>
          <button
            className="add-cart"
            onClick={() => props.onAddToCart(props.favorite)}
          >
            Add to cart
          </button>
          <button
            className="remove-fav"
            onClick={() => props.onRemoveFavoriteItem(props.favorite)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default FavoriteItem;
