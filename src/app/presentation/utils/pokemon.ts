export const getPokemonImgUrl = (url: string) => {
  const ID = getPokemonIdFromUrl(url)
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ID}.png`
}

export const getPokemonIdFromUrl = (url: string) => {
  const split = url.split('pokemon/').pop()
  const id = split?.replace('/', '')
  return String(id).padStart(3, '0')
}
