import { PokemonResponseModel } from '@/domain/models'

export const mockPokemonResponse = (): PokemonResponseModel => ({
  count: 1154,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=15&limit=15',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
})

export const mockPokemonDetailsResponse = (): any => ({
  id: 1,
  name: 'bulbasaur',
  url: 'any_url/1',
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 64,
  height: 69,
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  weight: 69,
})

export const mockPokemonDetailsResult = () => ({
  id: 1,
  name: 'bulbasaur',
  url: 'any_url/1',
  abilities: ['overgrow', 'chlorophyll'],
  base_experience: 64,
  height: 69,
  stats: [
    {
      base_stat: 45,
      name: 'hp',
    },
    {
      base_stat: 49,
      name: 'attack',
    },
  ],
  types: ['grass', 'poison'],
  weight: 69,
})
