import { Pokemon } from '@/api/domain/entities'

export interface PokemonsLoaderDataSource {
  findMany: () => Promise<Pokemon[]>
}
