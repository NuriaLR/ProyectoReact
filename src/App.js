//Importación de componentes y configuraciones. Definición de rutas y renderización de componentes.

// Importa el componente Index desde el directorio "./views/index".
import Index from "./views/index"; 
// Importa el componente Create desde el directorio "./views/create".
import Create from "./views/create"; 
// Importa el componente View desde el directorio "./views/view".
import View from "./views/view"; 
// Importa el archivo de estilos "./App.css".
import "./App.css"; 
// Importa los componentes Routes y Route desde react-router-dom.
import { Routes, Route } from "react-router-dom"; 
// Importa el componente Store desde el directorio "./store/store".
import Store from "./store/store"; 

// Define el componente funcional App.
function App() { 
  return (
    <Store> {/* Renderiza el componente Store, que proporciona el contexto de la aplicación. */}
      <div className="App"> {/* Renderiza un div con la clase "App". */}
        <Routes> {/* Renderiza las rutas de la aplicación. */}
          <Route path="/" element={<Index />} /> {/* Renderiza el componente Index en la ruta "/" de la aplicación. */}
          <Route path="create" element={<Create />} /> {/* Renderiza el componente Create en la ruta "/create" de la aplicación. */}
          <Route path="view/:peliId" element={<View />} /> {/* Renderiza el componente View en la ruta "/view/:peliId" de la aplicación. */}
        </Routes>
      </div>
    </Store>
  );
}
// Exporta el componente App como el componente predeterminado.
export default App; 
