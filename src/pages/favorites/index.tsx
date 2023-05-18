import { Layout } from "@/components/layouts";
import { PokemonFavorite } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localStorageFavorites } from "@/utils";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonFavorite pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
