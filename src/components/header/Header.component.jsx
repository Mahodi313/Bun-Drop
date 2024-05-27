import React from "react";

import "./Header.styles.css";

function Header() {
  return (
    <>
      <div className="header-section">
        <div className="header-image-section">
          <img
            className="header-image"
            src="/public/AllAboutBunDrop.png"
            alt="All about bun drop image"
          />
        </div>
        <div className="header-text-content">
          <h1>All about Bun Drop</h1>
          <p>
            We have been serving irresistible comfort food since 2024. Our
            mission is to keep you smiling with every bite.
          </p>
          <br />
          <p>Treat yourself to a feel-good meal today!</p>
          <br />
          <button className="join-btn">Join now</button>
        </div>
      </div>
    </>
  );
}

export default Header;
