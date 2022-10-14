import { PokemonResponseModel } from '@/domain/models'

export type PokemonParams = {
  offset: string
  limit: string
}
export interface Pokemon {
  load(params: PokemonParams): Promise<PokemonResponseModel>
}
