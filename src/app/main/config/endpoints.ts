export const getEndpoint = (key: string): string => {
  const endpoints = {
    pokemons: 'pokemon?offset=0&limit=300',
  }

  return endpoints[key]
}
