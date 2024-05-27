import React from "react";

import Product from "../../components/product/Product.component";
import useFetchData from "../../hooks/useFetchData";

import "./Menu.styles.css";

function Menu() {
  const {
    data: products,
    loading,
    error,
  } = useFetchData("http://localhost:3000/menu");

  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-nav">
          <h2 id="menu-title">Menu</h2>
          <div className="filter-section">
            <ul>
              <li>
                <h4>Burgers</h4>
              </li>
              <li>
                <h4>Sides</h4>
              </li>
              <li>
                <h4>Drinks</h4>
              </li>
              <li>
                <h4>Dressings</h4>
              </li>
              <li>
                <h4>Desserts</h4>
              </li>
            </ul>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data!</p>
        ) : products.length > 0 ? (
          <>
            <div className="burger-section">
              <h2 className="burger-section-title">Burgers</h2>
              <div className="burger-products">
                {products
                  .filter((p) => p.category === "burgers")
                  .map((b) => (
                    <Product key={b.id} product={b} />
                  ))}
              </div>
            </div>
            <div className="sides-section">
              <h2 className="sides-section-title">Sides</h2>
              <div className="sides-products">
                {products
                  .filter((p) => p.category === "sides")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div className="drinks-section">
              <h2 className="drinks-section-title">Drinks</h2>
              <div className="drinks-products">
                {products
                  .filter((p) => p.category === "drinks")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div className="dressings-section">
              <h2 className="dressings-section-title">Dressings</h2>
              <div className="dressings-products">
                {products
                  .filter((p) => p.category === "dressings")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div className="desserts-section">
              <h2 className="desserts-section-title">Desserts</h2>
              <div className="desserts-products">
                {products
                  .filter((p) => p.category === "desserts")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
          </>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}

export default Menu;
