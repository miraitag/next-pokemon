import { pokemonAPI } from "@/api";
import { Layout } from "@/components/layouts";
import { IPokemonResponse, IPokemonResults } from "@/interfaces";
import { IPokemon } from "@/interfaces/pokemon.interface";
import { localStorageFavorites } from "@/utils";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IPropsPokemonPage {
  pokemon: IPokemon;
}

const PokemonPageByName: NextPage<IPropsPokemonPage> = ({
  pokemon,
}: IPropsPokemonPage) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localStorageFavorites.existInFavorites(pokemon.id));
  });

  const onToggleFavorites = () => {
    localStorageFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "noimage.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToggleFavorites}
              >
                {isInFavorites ? "En Favoritos" : "Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokemonAPI.get<IPokemonResponse>("/pokemon?limit=151");

  const paths: { params: { name: string } }[] = data.results.map(
    (pokemon: IPokemonResults) => ({
      params: {
        name: pokemon.name,
      },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name: namePokemon } = ctx.params as { name: string };

  const { data } = await pokemonAPI.get<IPokemon>(`/pokemon/${namePokemon}`);

  const { id, name, sprites } = data;

  return {
    props: {
      pokemon: {
        id,
        name,
        sprites,
      },
    },
  };
};

export default PokemonPageByName;
