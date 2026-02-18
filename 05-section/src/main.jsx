import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Tumhara main component
import './index.css'; // Global styles

// Browser ke 'root' div ko pakro aur React tree render karo
ReactDOM.createRoot(document.getElementById('root')).render(<App />);