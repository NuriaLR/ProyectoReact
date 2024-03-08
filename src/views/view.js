/*
El código define un componente funcional View que utiliza useState, useEffect y useParams 
para gestionar el estado y los parámetros de la URL, mientras utiliza el contexto de la
 aplicación a través de useAppContext para obtener datos y renderiza la información 
de una película dentro del componente Layout. 
*/

// Importa los hooks useEffect y useState de React.
import { useEffect, useState } from "react";
// Importa el hook useParams de react-router-dom.
import { useParams } from "react-router-dom"; 
// Importa el componente Layout desde "../components/layout".
import Layout from "../components/layout"; 
// Importa la función useAppContext desde el directorio "../store/store".
import { useAppContext } from "../store/store"; 

// Define un componente funcional View.
export default function View() { 
  const [item, setItem] = useState({}); // Define un estado item con un objeto vacío y una función setItem para actualizarlo.
  const params = useParams(); // Obtiene los parámetros de la URL utilizando el hook useParams.
  const store = useAppContext(); // Obtiene el contexto de la aplicación utilizando la función useAppContext.

  useEffect(() => { // Ejecuta un efecto secundario después de que el componente se monta en el DOM.
    const peli = store.getItem(params.peliId); // Obtiene el elemento correspondiente al ID de la película de la tienda.
    setItem(peli); // Actualiza el estado item con la película obtenida.
  }, []); // Este efecto se ejecuta solo una vez después del montaje inicial del componente.

  return (
    <Layout> {/* Renderiza el componente Layout. */}
      <h2>{item?.titulo}</h2> {/* Renderiza el título de la película. */}
      <div>{item?.director}</div> {/* Renderiza el director de la película. */}
      <div>{item?.img ? <img src={item.img} width="400" /> : ""}</div> {/* Renderiza la imagen de la película si existe. */}
      <div>{item?.sinopsis}</div> {/* Renderiza la sinopsis de la película. */}
      <div>{item?.vista ? "Vista" : "No vista"}</div> {/* Renderiza si la película ha sido vista o no. */}
      <div>{item?.critica}</div> {/* Renderiza la crítica de la película. */}
    </Layout>
  );
}
