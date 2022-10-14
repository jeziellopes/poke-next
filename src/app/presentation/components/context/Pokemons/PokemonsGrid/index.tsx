import {
  Pagination,
  PaginationWrapper,
  PokemonCard,
} from '@/components/context'
import { Grid, Loading } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'
import { getPokemonImgUrl } from '@/presentation/utils'
import { useRouter } from 'next/router'

import * as S from './styles'

export const PokemonsGrid = () => {
  const router = useRouter()
  const { loading, pokemonsDetails, handleLikePokemon, getPokemonLikes } =
    usePokemonsContext()

  return (
    <S.Container>
      {loading || !pokemonsDetails ? (
        <Loading />
      ) : (
        <>
          <Grid>
            {Object.values(pokemonsDetails).map((pokemon, key) => (
              <PokemonCard
                key={key}
                id={pokemon.id}
                title={pokemon.name}
                types={pokemon.types || []}
                imageUrl={getPokemonImgUrl(pokemon.url)}
                height={280}
                likes={getPokemonLikes(pokemon)}
                onLike={() => handleLikePokemon(pokemon.id)}
                onClick={() => router.push(`/pokemon/${pokemon.id}`)}
              />
            ))}
          </Grid>
          <PaginationWrapper>
            <Pagination />
          </PaginationWrapper>
        </>
      )}
    </S.Container>
  )
}
