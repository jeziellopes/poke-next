import { Card, Grid } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'

import * as S from './styles'

export const PokemonsGrid = () => {
  const { pokemons } = usePokemonsContext()

  const getImgUrl = (url: string) => {
    const split1 = url.split('pokemon/').pop()

    if (split1) {
      const id = split1.replace('/', '')
      const padId = String(id).padStart(3, '0')
      console.log({ split1, id, padId })
      return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${padId}.png`
    }

    return ''
  }

  return (
    <S.Container>
      <Grid>
        {pokemons?.map((pokemon, key) => (
          <Card
            key={key}
            title={pokemon.name}
            imageUrl={getImgUrl(pokemon.url)}
            // width={300}
            height={400}
          />
        ))}
      </Grid>
    </S.Container>
  )
}
