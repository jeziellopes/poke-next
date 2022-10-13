import { Card, Grid } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'
import { getPokemonImgUrl } from '@/presentation/utils'

import * as S from './styles'

export const PokemonsGrid = () => {
  const { pokemons } = usePokemonsContext()

  return (
    <S.Container>
      <Grid>
        {pokemons?.map((pokemon, key) => (
          <Card
            key={key}
            title={pokemon.name}
            imageUrl={getPokemonImgUrl(pokemon.url)}
            height={280}
          />
        ))}
      </Grid>
    </S.Container>
  )
}
