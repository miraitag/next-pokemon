import { pokemonAPI } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { IPokemonResponse, IPokemonResults } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";

interface IPokemonsProps {
  pokemons: IPokemonResults[];
}

const HomePage: NextPage<IPokemonsProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: IPokemonResults) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonAPI.get<IPokemonResponse>("/pokemon?limit=151");

  const pokemons: IPokemonResults[] = data.results.map(
    (pokemon: IPokemonResults, i: number) => ({
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
