import { Pokemon } from '@/api/domain/entities'

export interface PokemonsLoader {
  load: () => Promise<Pokemon[]>
}
