import React from "react";
import { motion } from "framer-motion";

function PokeDisplay(pokemonData: any, status: any, error: any) {
  console.log(pokemonData.pokemonData);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>Error..{error.message}</h1>;
  }
  return (
    <>
      {pokemonData ? (
        <motion.img
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="pokemon-image"
          src={pokemonData?.pokemonData?.sprites?.front_default}
          alt=""
        />
      ) : null}
    </>
  );
}

export default PokeDisplay;
