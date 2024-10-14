import "./Components.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import { useParams } from "react-router-dom";   

export const Card = ({ id, title, description, players, categories }) => {
  const navigate = useNavigate();

  const HandleDetailClick = (event) => {
    event.preventDefault();
    // Aquí pasas el estado con la información del juego
    navigate(`/game/${id}`, {
      state: { title, description, players, categories },
    });
  };

  return (
    <div className="Card">
      <div>{title}</div>
      <button onClick={HandleDetailClick}>detalle</button>
      <button>borrar</button>
    </div>
  );
};

export const GameDetail = () => {
  const location = useLocation(); // Obtiene el objeto location

  // Asegúrate de que location.state no sea undefined
  if (!location.state) {
    return <div>No se encontraron detalles del juego.</div>;
  }

  // Desestructura la información del estado
  const { title, description, players, categories } = location.state;

  return (
    <form>
      <h1>Detalle del juego: {title}</h1>
      <div>
        <div>Descripción: {description}</div>
        <div>Jugadores: {players}</div>
        <div>Categorías: {categories}</div>
      </div>
    </form>
  );
};