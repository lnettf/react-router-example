import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";


export const Layout = () => {
  // Define un componente "plantilla"
  return (
    <>
      {/* Fragmento de React */}
      <Navbar /> {/* Muestra la barra de navegación */}
      <Outlet /> {/* Renderiza el contenido de las rutas */}
      <footer>Footer</footer> {/* Muestra el pie de página */}
    </>
  );
};
