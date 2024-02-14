import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact/Contact";

const router = createBrowserRouter([
  // Define las rutas de la aplicación
  {
    path: "/home", // Ruta para la página de inicio
    element: <Home />,
  },
  {
    path: "/admin", // Ruta para el área de administración
    element: <Layout />, // Renderiza la "plantilla" de la página de administración
    children: [
      // Rutas secundarias dentro del área de administración
      {
        path: "/admin", // Ruta base de administración
        element: <h1>Estoy en /admin</h1>, // Elemento/componente para mostrar cuando se accede a /admin
      },
      {
        path: "/admin/contact", // Ruta para el contacto dentro del área de administración
        element: <h1>Estoy en /admin/contact</h1>, // Elemento/componente para mostrar el contacto
      },
      {
        path: "/admin/:productId", // Ruta dinámica para detalles de producto dentro del área de administración
        element: <ProductDetail />, // Renderiza los detalles del producto
      },
    ],
  },
  {
    path: "/contact", // Ruta para la página de contacto
    element: <Contact />, // Elemento para renderizar la página de contacto
  },
  {
    path: "*", // Ruta para cualquier otra dirección no especificada
    element: <h1>404!</h1>, // Elemento para mostrar cuando se accede a una página no encontrada
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Proporciona el enrutador a la aplicación */}
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
