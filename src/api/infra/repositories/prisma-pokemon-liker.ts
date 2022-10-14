import { PokemonLikerRepository } from '@/api/data/interfaces'
import { Pokemon } from '@/api/domain/entities'
import { PokemonLikerParams } from '@/api/domain/usecases'
import { PokemonLikerPrismaDataSource } from '@/api/infra/datasources'

export class PokemonLikerPrismaRepository implements PokemonLikerRepository {
  constructor(
    private readonly likePokemonPrismaDataSource: PokemonLikerPrismaDataSource
  ) {}

  async likePokemon(params: PokemonLikerParams): Promise<Pokemon> {
    return this.likePokemonPrismaDataSource.createOrUpdate(params)
  }
}
