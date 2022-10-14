import { PokemonLikerDataSource } from '@/api/data/interfaces'
import { PokemonLikerParams } from '@/api/domain/usecases'
import { PrismaClient } from '@prisma/client'

export class PokemonLikerPrismaDataSource implements PokemonLikerDataSource {
  constructor(
    private readonly prismaClient: PrismaClient = new PrismaClient()
  ) {}

  async createOrUpdate(params: PokemonLikerParams) {
    return this.prismaClient.pokemon.upsert({
      where: { pokemonId: params.id },
      update: { likes: { increment: 1 } },
      create: {
        pokemonId: params.id,
        likes: 1,
      },
    })
  }
}
