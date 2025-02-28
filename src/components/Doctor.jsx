import React, { useEffect, useState } from "react";

const API_KEY = "HERE-1c9ae940-0c5a-42d1-952c-3b9a522e55fe"; // Replace with your actual API key

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get User Location
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchDoctors(latitude, longitude);
        },
        (err) => {
          setError("Location access denied. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const fetchDoctors = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?apikey=${API_KEY}&q=doctor&at=${lat},${lon}&limit=5`
      );
      const data = await response.json();
      setDoctors(data.items || []);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch doctor data. Try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="doctor-container">
      <h2>Nearest Doctors</h2>
      {loading && <p>Fetching nearest doctors...</p>}
      {error && <p className="error">{error}</p>}
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index}>
              <h3>{doctor.title}</h3>
              <p>{doctor.address.label}</p>
              {doctor.contacts?.[0]?.phone && (
                <p>📞 {doctor.contacts[0].phone[0].value}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No doctors found nearby.</p>
      )}
    </div>
  );
}

export default Doctor;
