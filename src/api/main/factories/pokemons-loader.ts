import { PokemonsLoaderService } from '@/api/data/services'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'
import { PokemonsLoaderPrismaRepository } from '@/api/infra/repositories'

export const makePokemonsLoaderService = () => {
  const dataSource = new PokemonsLoaderPrismaDataSource()
  const repo = new PokemonsLoaderPrismaRepository(dataSource)
  return new PokemonsLoaderService(repo)
}
