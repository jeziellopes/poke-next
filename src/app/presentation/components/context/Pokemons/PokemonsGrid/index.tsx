import {
  Pagination,
  PaginationWrapper,
  PokemonCard,
} from '@/components/context'
import { Grid } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'
import { getPokemonImgUrl } from '@/presentation/utils'

import * as S from './styles'

export const PokemonsGrid = () => {
  const { pokemonsDetails } = usePokemonsContext()

  return (
    <S.Container>
      <Grid>
        {(pokemonsDetails || []).map((pokemon, key) => (
          <PokemonCard
            key={key}
            title={pokemon.name}
            types={pokemon.types || []}
            imageUrl={getPokemonImgUrl(pokemon.url)}
            height={280}
          />
        ))}
      </Grid>
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </S.Container>
  )
}
