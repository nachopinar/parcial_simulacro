import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title }) => {
  return (
    <div>
      <div>{title}</div>
      <div onClick={() => console.log(id)}>detalle</div>
      <div>editar</div>
    </div>
  );
};

function App() {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = async (e) => {
    try {
      //Acá esperamos la respuesta del backend al hacerle un post con la información necesaria para crear el usuario
      const response = await fetch("http://localhost:3000/api/games", {
        method: "GET",
      });

      const data = await response.json();
      setJuegos(data);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  return (
    <form>
      <h1>Simulacro Parcial</h1>
      <div>
        {juegos.map((juego) => (
          <Card key={juego.id} id={juego.id} title={juego.title} />
        ))}
      </div>
    </form>
  );
}

export default App;
