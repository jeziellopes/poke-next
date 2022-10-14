import { PokemonLikesModel } from '@/domain/models'

export type PokemonLikesParams = {
  id: string
}

export interface PokemonLikes {
  load(params: PokemonLikesParams): Promise<PokemonLikesModel[]>
}
