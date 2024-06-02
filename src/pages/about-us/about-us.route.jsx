import React from "react";
import "./about-us.styles.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to Bun Drop, your go-to spot for the best burgers in town!
        </p>
      </section>

      <section className="about-us-content">
        <div className="about-us-description">
          <h2>Our Story</h2>
          <p>
            At Bun Drop, we believe in serving delicious and freshly made
            burgers. Our journey started with a passion for great food and a
            desire to bring joy to our community through our culinary creations.
            Every burger is made with the finest ingredients and a lot of love.
          </p>
        </div>

        <div className="about-us-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/public/Mehdi.png" alt="Team Member 1" />
              <h3>Mahdi</h3>
              <p>Founder & Chef</p>
            </div>
            <div className="team-member">
              <img src="/public/Rida.png" alt="Team Member 2" />
              <h3>Rida</h3>
              <p>Manager</p>
            </div>
            <div className="team-member">
              <img src="/public/Husam.png" alt="Team Member 3" />
              <h3>Husam</h3>
              <p>Head of Operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
