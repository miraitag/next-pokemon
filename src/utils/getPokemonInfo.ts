import { pokemonAPI } from "@/api";
import { IPokemon } from "@/interfaces/pokemon.interface";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokemonAPI.get<IPokemon>(`/pokemon/${nameOrId}`);

  const { id, name, sprites } = data;

  return {
    id,
    name,
    sprites,
  };
};
