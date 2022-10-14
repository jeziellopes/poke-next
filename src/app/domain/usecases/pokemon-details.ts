import { PokemonDetailsModel } from '@/domain/models'

export type PokemonDetailsParams = {
  id: string
  name: string
}

export interface PokemonDetails {
  load(params: PokemonDetailsParams): Promise<PokemonDetailsModel>
}
