/*Configuración y renderización de la aplicación React en el elemento con id "root" del DOM. 
Utilización BrowserRouter de react-router-dom para habilitar el enrutamiento en la aplicación 
y el modo estricto de React para detectar problemas potenciales en el código. 
También llama a reportWebVitals para medir el rendimiento de la aplicación. */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Crea un root de ReactDOM y lo renderiza en el elemento con el id "root".
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Usa el modo estricto de React para detectar posibles problemas en el código.
  <React.StrictMode>
    {/* Usa BrowserRouter para habilitar el enrutamiento en la aplicación. */}
    <BrowserRouter>
      {/* Renderiza el componente App dentro del BrowserRouter. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Llama a la función reportWebVitals para medir el rendimiento de la aplicación.
reportWebVitals();