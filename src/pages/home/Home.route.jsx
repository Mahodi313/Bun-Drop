import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header.component";
import FavoriteBurger from "../../components/favorite-burger/FavoriteBurger.component";

import useFetchData from "../../hooks/useFetchData";

import "./Home.styles.css";

function Home() {
  const navigate = useNavigate();

  const {
    data: products,
    loading,
    error,
  } = useFetchData("http://localhost:3000/menu");

  function pickRandomItems(items, n) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const randomBurgers = pickRandomItems(
    products.filter((product) => product.category === "burgers"),
    5
  );

  return (
    <>
      <div className="home-wrapper">
        <Header />
        <div className="favorites-section">
          <h2>Our favorites</h2>
          <div className="favorite-products-section">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading data!</p>
            ) : randomBurgers.length > 0 ? (
              randomBurgers.map((p) => <FavoriteBurger key={p.id} burger={p} />)
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
        <div className="third-section">
          <div className="content-section">
            <div className="content-wrapper">
              <h2>Are you hungry?</h2>
              <button
                onClick={() => {
                  navigate("/menu");
                }}
              >
                Order Online
              </button>
            </div>
          </div>
          <div className="picture-section"></div>
        </div>
        <div className="reviews-section">
          <h2>What our clients say</h2>
          <div className="all-reviews-wrapper">
            <div className="client-review">
              <img src="/public/mike.png" alt="Mike Tyson" />
              <h3>Mike Tyson</h3>
              <p>The food from Bun Drop is from heaven!</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="client-review">
              <img src="/public/fayye.png" alt="King Faisal II" />
              <h3>King Faisal II</h3>
              <p>Best burgers I've tasted!</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="client-review">
              <img src="/public/steve.png" alt="Steve Jobs" />
              <h3>Steve Jobs</h3>
              <p>This food will get you right!</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
