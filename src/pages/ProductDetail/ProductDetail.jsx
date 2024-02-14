import { useState } from "react";
import { Button } from "./components/Button/Button";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [color, setColor] = useState("yellow"); // Estado para el color del botón
  const { productId } = useParams(); // Obtiene el ID del producto de los parámetros de la URL

  const handleClick = () => {
    // Función para manejar el clic del botón
    setColor("red"); // Cambia el color del botón a rojo
    alert("¡Clic!"); // Muestra una alerta al hacer clic
  };

  return (
    <>
      <h1>
        Información de producto {productId} {/* Muestra el ID del producto */}
      </h1>
      <Button color={color} onClick={handleClick} />
      <Button color="blue" /> {/* Botón azul */}
      <Button color="green" /> {/* Botón verde */}
    </>
  );
};
