import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css'; // Asegúrate de tener los estilos globales aquí
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
