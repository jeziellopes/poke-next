import { PokemonsLoaderRepository } from '@/api/data/interfaces'
import { Pokemon } from '@/api/domain/entities'
import { PokemonsLoader } from '@/api/domain/usecases'

export class PokemonsLoaderService implements PokemonsLoader {
  constructor(
    private readonly pokemonsLoaderRepository: PokemonsLoaderRepository
  ) {
    this.pokemonsLoaderRepository = pokemonsLoaderRepository
  }

  async load(): Promise<Pokemon[]> {
    return this.pokemonsLoaderRepository.loadPokemons()
  }
}
