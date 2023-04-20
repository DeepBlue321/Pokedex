import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchPokemon } from "./api/fetchPokemon";
import PokeDisplay from "./PokeDisplay";

function Pokedex() {
  const [pokemonID, setPokemonID] = useState(29);

  // Fetch data using useQuery hook
  const {
    data: pokemonData,
    status,
    error,
  } = useQuery(["pokemon", pokemonID], () => fetchPokemon(pokemonID));

  const handleAreaClick = (event: any) => {
    event.preventDefault(); // Prevent default link behavior
    const title = event.target.getAttribute("title");
    if (title === "left") {
      setPokemonID((prev) => prev - 1);
      console.log(pokemonID);
    }
    if (title === "right") {
      setPokemonID((prev) => prev + 1);
      console.log(pokemonID);
    }
  };
  return (
    <div className="App">
      <div className="pokedex">
        <img src="pokedex.png" useMap="#image-map"></img>
        <motion.svg
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ opacity: [0, 1] }}
          style={{ position: "absolute", left: "13%", top: "47%" }}
        >
          <circle cx="100" cy="100" r="20" fill="red" />
          <circle cx="100" cy="100" r="30" fill="red" opacity={0.5} />
        </motion.svg>
        <PokeDisplay pokemonData={pokemonData} status={status} error={error} />
      </div>
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
