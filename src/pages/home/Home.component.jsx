import Header from "../../components/header/Header.component";

import useFetchData from "../../hooks/useFetchData";

import "./Home.styles.css";
import FavoriteBurger from "../../components/favorite-burger/FavoriteBurger.component";

function Home() {
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
              <p>No favorites available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
