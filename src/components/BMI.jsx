import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BMI() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    sugar: "",
    bloodPressure: "",
    exerciseDays: "",
    sleepHours: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // ✅ React Router hook for navigation

  const validate = () => {
    let newErrors = {};
    if (!formData.height || formData.height <= 0) newErrors.height = "Enter a valid height.";
    if (!formData.weight || formData.weight <= 0) newErrors.weight = "Enter a valid weight.";
    if (!formData.sugar || formData.sugar <= 0) newErrors.sugar = "Enter a valid sugar level.";
    if (!formData.bloodPressure) newErrors.bloodPressure = "Enter your blood pressure.";
    if (!formData.exerciseDays || formData.exerciseDays < 0 || formData.exerciseDays > 7)
      newErrors.exerciseDays = "Enter a value between 0-7.";
    if (!formData.sleepHours || formData.sleepHours < 0 || formData.sleepHours > 24)
      newErrors.sleepHours = "Enter a value between 0-24.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Navigating with data:", formData); // Debugging log
      navigate("/recomendations", { state: formData }); // ✅ Passing data when navigating
    }
  };

  return (
    <div className="form-container">
      <h2>BMI & Health Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Height (cm):</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} />
          {errors.height && <span className="error">{errors.height}</span>}
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          {errors.weight && <span className="error">{errors.weight}</span>}
        </div>

        <div className="form-group">
          <label>Sugar Level (mg/dL):</label>
          <input type="number" name="sugar" value={formData.sugar} onChange={handleChange} />
          {errors.sugar && <span className="error">{errors.sugar}</span>}
        </div>

        <div className="form-group">
          <label>Blood Pressure:</label>
          <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} />
          {errors.bloodPressure && <span className="error">{errors.bloodPressure}</span>}
        </div>

        <div className="form-group">
          <label>Exercise Days (per week):</label>
          <input type="number" name="exerciseDays" value={formData.exerciseDays} onChange={handleChange} />
          {errors.exerciseDays && <span className="error">{errors.exerciseDays}</span>}
        </div>

        <div className="form-group">
          <label>Sleep Hours (per day):</label>
          <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />
          {errors.sleepHours && <span className="error">{errors.sleepHours}</span>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default BMI;
