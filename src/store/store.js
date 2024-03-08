/*Este componente almacena elementos y proporciona funciones para crear, obtener y actualizar elementos. 
También ofrece un hook personalizado para acceder al contexto desde componentes hijos.
*/
import { createContext, useContext, useState } from "react";

// Creación del contexto de la aplicación con valores iniciales y funciones para manipular los datos.
const AppContext = createContext({
  items: [], // Arreglo de elementos almacenados en el contexto.
  createItem: (item) => {}, // Función para crear un nuevo elemento.
  getItem: (id) => {}, // Función para obtener un elemento por su ID.
  updateItem: (item) => {}, // Función para actualizar un elemento.
});

// Componente Store que proporciona el contexto de la aplicación a sus componentes hijos.
export default function Store({ children }) {
  // Estado para almacenar los elementos.
  const [items, setItems] = useState([]);

  // Función para crear un nuevo elemento y actualizar el estado.
  function createItem(item) {
    const temp = [...items];
    temp.unshift(item);
    setItems([...temp]);
  }

  // Función para obtener un elemento por su ID.
  function getItem(id) {
    const item = items.find((item) => item.id === id);
    return item;
  }

  // Función para actualizar un elemento y actualizar el estado.
  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
    return true;
  }

  // Renderiza el proveedor del contexto con los valores y funciones proporcionados.
  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de la aplicación.
export function useAppContext() {
  return useContext(AppContext);
}
