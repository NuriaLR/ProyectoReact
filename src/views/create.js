//Vista create que contiene formulario para crear una nueva película

import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  // Definición de estados para los campos del formulario utilizando el hook useState.
  //hook useState -> puedes mantener y actualizar tus propios recordatorios estados dentro de un componente funcional.
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [img, setImg] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [vista, setVista] = useState(false);
  const [critica, setCritica] = useState("");

  // Obtención del contexto de la aplicación utilizando el hook useAppContext.
  const store = useAppContext();

  // Definición de estilos para los elementos del formulario.
  const inputStyles = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  // Función para manejar cambios en los campos del formulario.
  function handleChange(e) {
    switch (e.target.name) {
      case "titulo":
        setTitulo(e.target.value);
        break;
      case "director":
        setDirector(e.target.value);
        break;
      case "sinopsis":
        setSinopsis(e.target.value);
        break;
      case "vista":
        setVista(e.target.checked);
        break;
      case "critica":
        setCritica(e.target.value);
        break;
    }
  }

  // Función para manejar el envío del formulario.
  function handleSubmit(e) {
    e.preventDefault();

    // Creación de objeto que representa una nueva pelicula con diferentes propiedades.
    //Se utiliza para después almacenar la información de la pelicula y enviarla al servidor.
    const newPeli = {
      id: crypto.randomUUID(), // Generación de un ID único para la pelicula.
      titulo,
      director,
      img,
      sinopsis,
      vista,
      critica,
    };

    // Llamada a la función 'createItem' del contexto de la aplicación para agregar la nueva pelicula.
    store.createItem(newPeli);
  }

  // Función para manejar el cambio de archivo de la imagen.
  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var cinefilo = new FileReader();
    cinefilo.onloadend = function () {
      console.log("RESULT", cinefilo.result);
      setImg(cinefilo.result.toString());
    };
    cinefilo.readAsDataURL(file);
  }

  // Renderizado del componente Layout que contiene el formulario de creación.
  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Título</div>
          <input
            style={inputStyles.input}
            type="text"
            name="titulo"
            onChange={handleChange}
            value={titulo}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Director</div>
          <input
            style={inputStyles.input}
            type="text"
            name="director"
            onChange={handleChange}
            value={director}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cartel</div>
          <input type="file" name="img" onChange={handleOnChangeFile} />
          <div>{!!img ? <img src={img} width="200" /> : ""}</div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Sinopsis</div>
          <input
            style={inputStyles.input}
            type="text"
            name="sinopsis"
            onChange={handleChange}
            value={sinopsis}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Vista</div>
          <input
            style={inputStyles.input}
            type="checkbox"
            name="vista"
            onChange={handleChange}
            value={vista}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Crítica</div>
          <input
            style={inputStyles.input}
            type="text"
            name="critica"
            onChange={handleChange}
            value={critica}
          />
        </div>

        {/* Botón para enviar el formulario */}
        <input
          type="submit"
          value="AÑADIR PELI"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#588bbd",
            color: "white",
            fontWeight: "bolder", 
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}
