import { IPokemonResults } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface IPokemonCardProps {
  pokemon: IPokemonResults;
}

export const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const router = useRouter();

  const submitPage = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={submitPage}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
