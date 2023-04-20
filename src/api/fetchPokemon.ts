export const fetchPokemon = async (pokemonID: number): Promise<any> => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonID
  );
  const data = await response.json();
  return data;
};
