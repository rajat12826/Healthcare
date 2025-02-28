import React from "react";
import "../App.css";// Ensure you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our healthcare platform! Our goal is to provide personalized health 
        recommendations and easy access to medical assistance.
      </p>
      <p>
        This is a **prototype**, and we are currently working on developing an AI chatbot to 
        enhance user experience and provide instant health solutions.
      </p>
      <p>
        Stay tuned for upcoming features, including smart diagnostics and real-time 
        hospital locator services.
      </p>
    </div>
  );
};

export default About;
