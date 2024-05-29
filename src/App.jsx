import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import Home from "./pages/home/Home.route";
import Footer from "./components/footer/Footer.component";
import Menu from "./pages/menu/Menu.route";
import Checkout from "./pages/checkout/Checkout.route";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
