import { Pokemon } from '@/api/domain/entities'
import { PokemonLikerParams } from '@/api/domain/usecases'

export interface PokemonLikerDataSource {
  createOrUpdate: (params: PokemonLikerParams) => Promise<Pokemon>
}
