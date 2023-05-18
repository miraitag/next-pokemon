import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

interface IPokemonFavoriteCardProps {
  pokemonId: number;
}

export const PokemonFavoriteCard: FC<IPokemonFavoriteCardProps> = ({
  pokemonId,
}): ReactElement => {
  const router = useRouter();

  const onSubmitPokemonPage = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={onSubmitPokemonPage}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
