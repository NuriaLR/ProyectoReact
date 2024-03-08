//Creo componente llamado Peli, que renderiza la información de una película.

// Importo el componente Link de react-router-dom para manejar las rutas en la aplicación.
import { Link } from "react-router-dom";

// Defino un componente funcional llamado Peli que recibe un prop llamado 'item' que contiene la información de la película.
export default function Peli({ item }) {
  // Defino un objeto 'peliContainerStyle' que contiene estilos CSS para el contenedor de la película.
  const peliContainerStyle = {
    display: "flex", 
    flexDirection: "column", 
    width: "300px", 
  };

  // Defino un objeto 'peliInfoStyle' que contiene estilos CSS para la información de la película.
  const peliInfoStyle = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    textAlign: "center", 
  };

  // Retorno el JSX que representa el componente peli.
  return (
    <div style={peliContainerStyle}> {/* Div contenedor con los estilos definidos anteriormente. */}
      <Link to={`/view/${item.id}`} style={peliInfoStyle}> {/* Enlace a la vista detallada de la película con el id como parte de la URL. */}
        <img src={item.img} width="200" /> {/* Imagen de la película con la portada obtenida de 'item.img'. */}
        <div>{item.titulo}</div> {/* Título de la película obtenido de 'item.titulo'. */}
      </Link>
    </div>
  );
}
