import { PokemonModel } from '@/domain/models/pokemon-model'

type LoaderParams = {
  offset: number
}

export interface Pokemon {
  loader(params: LoaderParams): Promise<PokemonModel>
}
