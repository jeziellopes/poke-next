import {
  Pagination,
  PaginationWrapper,
  PokemonCard,
} from '@/components/context'
import { Grid, Loading } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'
import { getPokemonImgUrl } from '@/presentation/utils'

import * as S from './styles'

export const PokemonsGrid = () => {
  const { loading, pokemonsDetails, handleLikePokemon, getPokemonLikes } =
    usePokemonsContext()

  return (
    <S.Container>
      {loading || !pokemonsDetails ? (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      ) : (
        <Grid>
          {Object.values(pokemonsDetails).map((pokemon, key) => (
            <PokemonCard
              id={pokemon.id}
              key={key}
              title={pokemon.name}
              types={pokemon.types || []}
              imageUrl={getPokemonImgUrl(pokemon.url)}
              height={280}
              likes={getPokemonLikes(pokemon)}
              onClick={() => handleLikePokemon(pokemon.id)}
            />
          ))}
        </Grid>
      )}
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </S.Container>
  )
}
