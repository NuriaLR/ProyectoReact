// Importa el componente Peli desde el directorio "../components/peli".
import Peli from "../components/peli"; 
// Importa el componente Layout desde el directorio "../components/layout".
import Layout from "../components/layout"; 
// Importa la función useAppContext desde el directorio "../store/store".
import { useAppContext } from "../store/store"; 

// Define un componente funcional llamado Index.
export default function Index() { 
  // Obtiene el contexto de la aplicación utilizando la función useAppContext.
  const store = useAppContext(); 

  // Define un objeto de estilo llamado pelisContainer para el contenedor de películas.
  const pelisContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout> {/* Renderiza el componente Layout. */}
      <div style={pelisContainer}> {/* Renderiza un div con estilos pelisContainer. */}
        {store.items.map((item) => ( // Itera sobre los elementos en store.items.
          <Peli key={item.id} item={item} /> // Renderiza un componente Peli con una clave única y pasa el elemento como prop "item".
        ))}
      </div>
    </Layout>
  );
}
