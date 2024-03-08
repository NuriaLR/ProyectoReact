//Este componente NavBar rederiza una barra de navegación con los enlaces que dirigen a la página principal y a la de create
//Defino objetos y aplico en el JSX los estilos y el contenedor del nav

// Importo el componente Link de react-router-dom para manejar las rutas en la aplicación.
import { Link } from "react-router-dom";

// Defino un componente funcional llamado NavBar que representa la barra de navegación de la aplicación.
export default function NavBar() {
  // Defino un objeto 'linkStyle' que contiene estilos CSS para los enlaces de la barra de navegación.
  const linkStyle = {
    padding: "10px", 
    display: "block", 
    fontSize: "18px", 
  };

  // Defino un objeto 'navContainerStyle' que contiene estilos CSS para el contenedor de la barra de navegación.
  const navContainerStyle = {
    backgroundColor: "#7e9ea1", 
    padding: "10px", 
    display: "flex", 
    gap: "5px", 
    justifyContent: "center", 
  };

  // Retorno el JSX que representa la barra de navegación.
  return (
    <div style={navContainerStyle}> {/* Div contenedor con los estilos definidos anteriormente. */}
      <Link to="/" style={linkStyle}> {/* Enlace al inicio de la aplicación con los estilos definidos. */}
        INICIO 
      </Link>

      <Link to="/create" style={linkStyle}> {/* Enlace para crear algo nuevo en la aplicación con los estilos definidos. */}
        CREA TU PELI
      </Link>
    </div>
  );
}
