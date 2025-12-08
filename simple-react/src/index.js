import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create root elemnthu
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals();
