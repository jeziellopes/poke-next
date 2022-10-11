import { PokemonModel } from '@/domain/models'

export const mockPokemonResponse = (): PokemonModel[] => [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
]
