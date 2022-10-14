import { Pokemon } from '@/api/domain/entities'

export type PokemonLikerParams = {
  id: number
  likes?: number
}

export interface PokemonLiker {
  like: (params: PokemonLikerParams) => Promise<Pokemon>
}
