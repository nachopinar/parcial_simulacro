import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Card, GameDetail } from "./Components";
import Home from "./Home";



function App() {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = async () => {
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
   <Router>
     <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Home juegos={juegos} />} />
        <Route path="/game/:id" element={<GameDetail juegos={juegos}/>} />
     </Routes>
   </Router>
 );
}

export default App;
