import { PokemonsLoaderRepository } from '@/api/data/interfaces'
import { Pokemon } from '@/api/domain/entities'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'

export class PokemonsLoaderPrismaRepository
  implements PokemonsLoaderRepository
{
  constructor(
    private readonly loadPokemonsPrismaDataSource: PokemonsLoaderPrismaDataSource
  ) {}

  async loadPokemons(): Promise<Pokemon[]> {
    return this.loadPokemonsPrismaDataSource.findMany()
  }
}
