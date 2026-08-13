import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Main'; // Import dari Main.jsx yang sudah diupdate
import '../css/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);