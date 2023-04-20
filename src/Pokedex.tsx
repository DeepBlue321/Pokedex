import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchPokemon } from "./api/fetchPokemon";
import PokeDisplay from "./PokeDisplay";

function Pokedex() {
  const [pokemonID, setPokemonID] = useState(1);
  const [text, setText] = useState(false);

  const {
    data: pokemonData,
    status,
    error,
  } = useQuery(["pokemon", pokemonID], () => fetchPokemon(pokemonID));

  const handleAreaClick = (event: any) => {
    event.preventDefault();
    const title = event.target.getAttribute("title");
    if (title === "left") {
      setPokemonID((prev) => (prev - 1 > 0 ? prev - 1 : 225));
    }
    if (title === "right") {
      setPokemonID((prev) => prev + 1);
    }
    if (title === "up") {
      if (!text) {
        setText(true);
      }
    }
    if (title === "down") {
      if (text) {
        setText(false);
      }
    }
  };
  return (
    <div className="App">
      <motion.div
        animate={{ y: [100, -10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="pokedex"
      >
        <img src="pokedex.png" useMap="#image-map"></img>

        <PokeDisplay
          text={text}
          pokemonData={pokemonData}
          status={status}
          error={error}
        />
      </motion.div>
      <map name="image-map">
        <area
          onClick={handleAreaClick}
          alt="left"
          title="left"
          href=""
          coords="346,597,389,633"
          shape="rect"
        ></area>
        <area
          onClick={handleAreaClick}
          target=""
          alt="right"
          title="right"
          href=""
          coords="411,601,443,633"
          shape="rect"
        ></area>
        <area
          onClick={handleAreaClick}
          target=""
          alt="up"
          title="up"
          href=""
          coords="376,559,416,595"
          shape="rect"
        ></area>
        <area
          onClick={handleAreaClick}
          target=""
          alt="down"
          title="down"
          href=""
          coords="382,634,418,669"
          shape="rect"
        ></area>
      </map>
    </div>
  );
}

export default Pokedex;
