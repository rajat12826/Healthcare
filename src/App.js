import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // ✅ Only import Routes & Link
import "./App.css";
import BMI from "./components/BMI";
import Doctor from "./components/Doctor";
import About from "./components/About";
import Recomendations from "./components/Recomendations";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">H</div>
        <div className="nav-right">
          <Link to="/bmi">Checkup</Link>
          <Link to="/doctor">Doctor</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>

      <Routes> {/* ✅ No need for extra <BrowserRouter> */}
        <Route path="/" element={
          <>
            <div className="content">
              <div className="info-box">
                <h2>Importance of Routine Checkup</h2>
                <p>
                  Regular health checkups are essential in preventing diseases, ensuring early
                  diagnosis, and maintaining overall well-being.
                  {showMore &&
                    " They help detect health issues before they become severe and allow for timely medical intervention, ultimately leading to a healthier life."}
                </p>
                <button className="show-more" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
              <Link to="/bmi">
                <button className="get-started">Get Started</button>
              </Link>
            </div>

            <div className="hospital-content">
              <div className="hospital-box">
                <h2>Nearest Hospital</h2>
                <p>Find the closest hospital to you for any medical emergency or routine checkup.</p>
              </div>
              <Link to="/doctor">
                <button className="search-hospital">Search</button>
              </Link>
            </div>
          </>
        } />

        <Route path="/bmi" element={<BMI />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/recomendations" element={<Recomendations />} />
      </Routes>
    </div>
  );
}

export default App;
