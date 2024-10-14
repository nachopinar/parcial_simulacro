import { useState, useEffect } from "react";

export const useJuegos = () => {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = async () => {
    const response = await fetch("http://localhost:3000/api/games", {
      method: "GET",
    });
    const data = await response.json();
    setJuegos(data);
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  return { juegos, cargarJuegos };
};
