import { PokemonLikerService } from '@/api/data/services'
import { PokemonLikerPrismaDataSource } from '@/api/infra/datasources'
import { PokemonLikerPrismaRepository } from '@/api/infra/repositories'

export const makePokemonLikerService = () => {
  const dataSource = new PokemonLikerPrismaDataSource()
  const repo = new PokemonLikerPrismaRepository(dataSource)
  return new PokemonLikerService(repo)
}
