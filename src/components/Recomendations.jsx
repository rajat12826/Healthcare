import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Recomendations() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  const generateRecommendations = () => {
    let recommendations = {
      BMI: [],
      Sugar: [],
      BloodPressure: [],
      Exercise: [],
      Sleep: [],
    };

    if (formData.height && formData.weight) {
      const bmi = (formData.weight / ((formData.height / 100) ** 2)).toFixed(2);
      if (bmi < 18.5) recommendations.BMI.push("Your BMI is low. Consider a balanced diet to gain weight.");
      else if (bmi > 25) recommendations.BMI.push("Your BMI is high. Regular exercise and a balanced diet are recommended.");
      else recommendations.BMI.push("Your BMI is normal. Maintain a healthy lifestyle!");
    }

    if (formData.sugar > 140) recommendations.Sugar.push("Your sugar level is high. Reduce sugar intake and stay active.");
    if (formData.sugar < 70) recommendations.Sugar.push("Your sugar level is low. Ensure a proper diet with sufficient glucose.");

    if (formData.bloodPressure) {
      const [sys, dia] = formData.bloodPressure.split("/").map(Number);
      if (sys > 130 || dia > 80) recommendations.BloodPressure.push("Your blood pressure is high. Reduce salt intake and exercise regularly.");
      else if (sys < 90 || dia < 60) recommendations.BloodPressure.push("Your blood pressure is low. Stay hydrated and eat nutritious food.");
    }

    if (formData.exerciseDays < 3) recommendations.Exercise.push("Increase exercise days to at least 3-5 times a week for better health.");
    if (formData.sleepHours < 6) recommendations.Sleep.push("Your sleep hours are low. Aim for 7-9 hours of sleep for a healthier lifestyle.");

    return recommendations;
  };

  const recommendations = generateRecommendations();

  return (
    <div className="recommendation-wrapper">
      <div className="recommendation-container">
        <h2>Health Recommendations</h2>

        {Object.entries(recommendations).map(([category, recs]) => (
          recs.length > 0 && (
            <div key={category} className="recommendation-category">
              <h3>{category}</h3>
              <div className="recommendation-list">
                {recs.map((rec, index) => (
                  <div key={index} className="recommendation-item">{rec}</div>
                ))}
              </div>
            </div>
          )
        ))}

        {Object.values(recommendations).flat().length === 0 && (
          <p className="no-recommendations">No recommendations. Keep maintaining a healthy lifestyle!</p>
        )}

        <button className="go-back-button" onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}

export default Recomendations;
