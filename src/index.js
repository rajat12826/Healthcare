import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Using ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App in BrowserRouter only here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Report Web Vitals
reportWebVitals();
