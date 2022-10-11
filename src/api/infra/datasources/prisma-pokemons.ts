import { PokemonsLoaderDataSource } from '@/api/data/interfaces'
import { PrismaClient } from '@prisma/client'

export class PokemonsLoaderPrismaDataSource
  implements PokemonsLoaderDataSource
{
  constructor(
    private readonly prismaClient: PrismaClient = new PrismaClient()
  ) {}

  async findMany() {
    return this.prismaClient.pokemon.findMany()
  }
}
