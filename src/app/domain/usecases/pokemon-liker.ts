import { PokemonLikesModel } from '@/domain/models'

export type PokemonLikerParams = {
  id: string
}

export interface PokemonLiker {
  like(params: PokemonLikerParams): Promise<PokemonLikesModel>
}
