import { useState, useEffect } from "react";

const useJuegos = () => {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/games");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setJuegos(data);
    } catch (error) {
      console.error("Error cargando los juegos:", error);
    }
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  return { juegos, setJuegos };
};

export default useJuegos;
