import "./Components.css";
import { useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import { useParams } from "react-router-dom";   
import Home from "./Home";
import useJuegos from "./useJuegos";

export const Card = ({ id, title, description, players, categories, onDelete }) => {
  const navigate = useNavigate();
  const HandleDeleteClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      console.log("Juego eliminado con éxito");
      // const handleReload = window.location.reload();
      onDelete(id);
      // Aquí podrías agregar lógica adicional, como actualizar el estado
    } catch (error) {
      console.error("Error eliminando el juego:", error);
    }
  };

  const HandleDetailClick = (event) => {
    event.preventDefault();
    navigate(`/game/${title}`, {
      state: { title, description, players, categories },
    });
  };

  return (
    <div className="Card">
      <div>{title}</div>
      <button onClick={HandleDetailClick}>detalle</button>
      <button onClick={HandleDeleteClick}>borrar</button>
    </div>
  );
};

export const GameDetail = () => {
  const navigate = useNavigate();
  const HandleReturnClick = (event) => {
    event.preventDefault();
    navigate(`/home`);}

  const location = useLocation(); 

  if (!location.state) {
    return <div>No se encontraron detalles del juego.</div>;
  }

  // Desestructura la información del estado
  const { title, description, players, categories } = location.state;

  return (
    <form>
      <h1>Detalle del juego: {title}</h1>
      <div className = "GameDetail">
        <div>Descripción: {description}</div>
        <div>Jugadores: {players}</div>
        <div>Categorías: {categories}</div>
      </div>
      <button onClick={HandleReturnClick}>Return Home</button>
    </form>
  );
};