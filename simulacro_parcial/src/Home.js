import React from "react";
import { useState, useEffect } from "react";
import {Card} from "./Components";

const Home = ({juegos, setJuegos}) => { 
   const handleDeleteJuego = (id) => {
     setJuegos((prevJuegos) => prevJuegos.filter((juego) => juego.id !== id));
   };

  return (
    <form>
      <h1>Simulacro Parcial</h1>
      <div>
        {juegos.map((juego) => (
          <Card
            key={juego.id}
            id={juego.id}
            title={juego.title}
            description={juego.description}
            players={juego.players}
            categories={juego.categories}
            onDelete={handleDeleteJuego}
          />
        ))}
      </div>
    </form>
  );
};

export default Home;


