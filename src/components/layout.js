//Defino el componente Layout que actúa como un contenedor principal.
//Incluye el componente NavBar y un contenedor principal para estilos.

// Importo el componente NavBar desde el archivo navbar.js que está en el mismo directorio.
import NavBar from "./navbar";

// Defino un componente funcional llamado Layout que recibe un prop llamado 'children', que representa los componentes hijos que se colocarán dentro de este Layout.
export default function Layout({ children }) {
  // Defino un objeto 'containerStyle' que contiene estilos CSS para el contenedor principal del Layout.
  const containerStyle = {
    width: "90%",
    margin: "100px auto", 
  };
  
  // Retorno el JSX que representa el Layout.
  return (
    <div>
      <NavBar /> {/* Renderizamos el componente NavBar dentro del Layout. */}
      <div style={containerStyle}>{children}</div> {/* Renderizamos un div con los estilos definidos anteriormente y colocamos los componentes hijos dentro de este div. */}
    </div>
  );
}
