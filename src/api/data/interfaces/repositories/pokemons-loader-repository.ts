import { Pokemon } from '@/api/domain/entities'

export interface PokemonsLoaderRepository {
  loadPokemons: () => Promise<Pokemon[]>
}
