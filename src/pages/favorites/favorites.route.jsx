import { useContext } from "react";

import { AuthContext } from "../../contexts/auth.context";
import { CartContext } from "../../contexts/cart.context";

import FavoriteItem from "../../components/favorite-item/favorite-item.component";

import "./favorites.styles.css";

function Favorites() {
  const { user } = useContext(AuthContext);
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  return (
    <>
      {user ? (
        <div className="favorites-wrapper">
          <h1 className="favorite-section-title">Favorites</h1>
          <div className="favorite-section">
            {user.favorites && user.favorites.length > 0 ? (
              user.favorites.map((food) => (
                <FavoriteItem
                  key={food.id}
                  favorite={food}
                  onAddToCart={handleAddToCart}
                />
              ))
            ) : (
              <strong className="nofavorite">
                No favorites yet. Add some burgers to your favorites!
              </strong>
            )}
          </div>
        </div>
      ) : (
        <h1 className="notLoggedIn">You must be logged in to see favorites.</h1>
      )}
    </>
  );
}

export default Favorites;
