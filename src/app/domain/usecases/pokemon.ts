import { PokemonModel } from '@/domain/models/pokemon-model'

export interface Pokemon {
  load(): Promise<PokemonModel[]>
}
