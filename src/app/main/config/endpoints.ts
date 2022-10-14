export const getEndpoint = (key: string): string => {
  const endpoints = {
    pokemons: 'pokemon',
    pokemons_likes: 'pokemons',
    pokemon_like: 'pokemon/like',
  }

  return endpoints[key]
}
