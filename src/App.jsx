import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import Home from "./components/home/Home.component";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
