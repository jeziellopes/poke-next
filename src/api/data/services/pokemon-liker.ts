import { PokemonLikerRepository } from '@/api/data/interfaces'
import { Pokemon } from '@/api/domain/entities'
import { PokemonLiker, PokemonLikerParams } from '@/api/domain/usecases'

export class PokemonLikerService implements PokemonLiker {
  constructor(private readonly pokemonLikerRepository: PokemonLikerRepository) {
    this.pokemonLikerRepository = pokemonLikerRepository
  }

  async like(params: PokemonLikerParams): Promise<Pokemon> {
    return this.pokemonLikerRepository.likePokemon(params)
  }
}
