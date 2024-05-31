import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/Home.route";
import Footer from "./components/footer/Footer.component";
import Menu from "./pages/menu/Menu.route";
import Checkout from "./pages/checkout/Checkout.route";
import Confirmation from "./pages/confirmation/confirmation.route";
import ProductDetails from "./pages/product-details/productDetails.route";
import Authentication from "./pages/authentication/authentication.route";
import Favorites from "./pages/favorites/favorites.route";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:id" element={<Confirmation />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
