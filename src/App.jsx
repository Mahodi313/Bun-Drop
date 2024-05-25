import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
