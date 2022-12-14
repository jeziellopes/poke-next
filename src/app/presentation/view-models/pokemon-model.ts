export type PokemonViewModel = {
  id: string
  name: string
  url: string
  abilities?: string[]
  base_experience?: number
  height?: number
  stats?: Array<{
    name: string
    base_stat: number
  }>
  types?: string[]
  weight?: number
}
