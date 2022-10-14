import { Pokemon } from '@/api/domain/entities'
import { PokemonLikerParams } from '@/api/domain/usecases'

export interface PokemonLikerRepository {
  likePokemon: (params: PokemonLikerParams) => Promise<Pokemon>
}
