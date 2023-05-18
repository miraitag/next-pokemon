import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { PokemonFavoriteCard } from "../PokemonFavoriteCard";

interface IPokemonFavoriteProps {
  pokemons: number[];
}

export const PokemonFavorite: FC<IPokemonFavoriteProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id: number) => (
        <PokemonFavoriteCard key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
