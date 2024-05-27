import React from "react";
import { Link } from "react-router-dom";

import "./FavoriteBurger.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

function FavoriteBurger(props) {
  return (
    <>
      <div className="favoriteProduct">
        <img src={props.burger.image} alt={props.burger.title} />
        <h5>{props.burger.title}</h5>
        <Link to={`/product/${props.burger.id}`}>
          <FontAwesomeIcon id="arrow-icon" icon={faCircleArrowRight} />
        </Link>
      </div>
    </>
  );
}

export default FavoriteBurger;
