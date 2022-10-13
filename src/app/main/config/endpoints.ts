export const getEndpoint = (key: string): string => {
  const endpoints = {
    pokemons: 'pokemon?offset=0&limit=15',
  }

  return endpoints[key]
}
