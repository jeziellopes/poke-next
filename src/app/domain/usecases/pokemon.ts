import { PokemonModel } from '@/domain/models/pokemon-model'

export type RemotePokemonParams = {
  offset: string
  limit: string
}
export interface Pokemon {
  load(params: RemotePokemonParams): Promise<PokemonModel[]>
}
