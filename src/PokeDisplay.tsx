import React from "react";
import { motion } from "framer-motion";

function PokeDisplay(props: any) {
  const { pokemonData, text, status, error } = props;
  console.log(pokemonData);

  if (status === "loading") {
    return (
      <div className="pokemon-display">
        <h1 className=" bit-text">Loading...</h1>
      </div>
    );
  }

  if (status === "error") {
    return <h1 className="pokemon-display">Error..{error.message}</h1>;
  }
  return (
    <>
      {!text ? (
        <motion.img
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="pokemon-display"
          src={pokemonData?.sprites?.front_default}
          alt=""
        />
      ) : (
        <div className="pokemon-display">
          <h1 className=" bit-text">{pokemonData?.name}</h1>
          <div className="pokemon-display__stat-screen">
            {pokemonData?.stats?.map((el: any) => {
              return (
                <h1 className=" bit-text">
                  {el?.stat?.name + ": " + el?.base_stat}
                </h1>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default PokeDisplay;
