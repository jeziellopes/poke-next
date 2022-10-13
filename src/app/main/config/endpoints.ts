export const getEndpoint = (key: string): string => {
  const endpoints = {
    pokemons: 'pokemon',
  }

  return endpoints[key]
}
