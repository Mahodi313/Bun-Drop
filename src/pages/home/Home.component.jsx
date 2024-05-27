import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header.component";

import useFetchData from "../../hooks/useFetchData";

import "./Home.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const {
    data: products,
    loading,
    error,
  } = useFetchData("http://localhost:3000/menu");

  return (
    <>
      <div className="home-wrapper">
        <Header />
        <div className="favorites-section">
          <h3>Our favorites</h3>
          <div className="favorite-products-section">
            {/* {products
              .filter((p) => p.category === "burgers")
              .map((p) => (
                <div className="favoriteProduct">
                  <img src={p.image} alt="product image" />
                  <h5>{p.title}</h5>
                  <Link>
                    <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
                  </Link>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
