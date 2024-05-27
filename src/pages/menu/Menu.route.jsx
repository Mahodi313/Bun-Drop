import React, { useRef, useState } from "react";

import Product from "../../components/product/Product.component";

import useFetchData from "../../hooks/useFetchData";

import "./Menu.styles.css";

function Menu() {
  const burgerSectionRef = useRef(null);
  const sidesSectionRef = useRef(null);
  const drinksSectionRef = useRef(null);
  const dressingsSectionRef = useRef(null);
  const dessertsSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  const {
    data: products,
    loading,
    error,
  } = useFetchData("http://localhost:3000/menu");

  const scrollToSection = (sectionRef, sectionName) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName);
    console.log("Active section set to:", sectionName);
  };

  const clearFocus = () => {
    setActiveSection(null);
  };

  const handleSectionClick = (e, sectionRef, sectionName) => {
    e.stopPropagation();
    scrollToSection(sectionRef, sectionName);
  };

  return (
    <>
      <div className="menu-wrapper" onClick={clearFocus}>
        <div className="menu-nav">
          <h2 id="menu-title">Menu</h2>
          <div className="filter-section">
            <ul>
              <li>
                <h4
                  onClick={(e) =>
                    handleSectionClick(e, burgerSectionRef, "burgers")
                  }
                >
                  Burgers
                </h4>
              </li>
              <li>
                <h4
                  onClick={(e) =>
                    handleSectionClick(e, sidesSectionRef, "sides")
                  }
                >
                  Sides
                </h4>
              </li>
              <li>
                <h4
                  onClick={(e) =>
                    handleSectionClick(e, drinksSectionRef, "drinks")
                  }
                >
                  Drinks
                </h4>
              </li>
              <li>
                <h4
                  onClick={(e) =>
                    handleSectionClick(e, dressingsSectionRef, "dressings")
                  }
                >
                  Dressings
                </h4>
              </li>
              <li>
                <h4
                  onClick={(e) =>
                    handleSectionClick(e, dessertsSectionRef, "desserts")
                  }
                >
                  Desserts
                </h4>
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
            <div
              className={`burger-section ${
                activeSection === "burgers" ? "" : activeSection ? "blur" : ""
              }`}
              ref={burgerSectionRef}
            >
              <h2 className="burger-section-title">Burgers</h2>
              <div className="burger-products">
                {products
                  .filter((p) => p.category === "burgers")
                  .map((b) => (
                    <Product key={b.id} product={b} />
                  ))}
              </div>
            </div>
            <div
              className={`sides-section ${
                activeSection === "sides" ? "" : activeSection ? "blur" : ""
              }`}
              ref={sidesSectionRef}
            >
              <h2 className="sides-section-title">Sides</h2>
              <div className="sides-products">
                {products
                  .filter((p) => p.category === "sides")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div
              className={`drinks-section ${
                activeSection === "drinks" ? "" : activeSection ? "blur" : ""
              }`}
              ref={drinksSectionRef}
            >
              <h2 className="drinks-section-title">Drinks</h2>
              <div className="drinks-products">
                {products
                  .filter((p) => p.category === "drinks")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div
              className={`dressings-section ${
                activeSection === "dressings" ? "" : activeSection ? "blur" : ""
              }`}
              ref={dressingsSectionRef}
            >
              <h2 className="dressings-section-title">Dressings</h2>
              <div className="dressings-products">
                {products
                  .filter((p) => p.category === "dressings")
                  .map((s) => (
                    <Product key={s.id} product={s} />
                  ))}
              </div>
            </div>
            <div
              className={`desserts-section ${
                activeSection === "desserts" ? "" : activeSection ? "blur" : ""
              }`}
              ref={dessertsSectionRef}
            >
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
