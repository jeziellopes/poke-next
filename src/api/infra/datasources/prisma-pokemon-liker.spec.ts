import { Pokemon } from '@/api/domain/entities'
import { PokemonLikerPrismaDataSource } from '@/api/infra/datasources'
import { ctx } from '@/api/infra/helpers'
import { mockParams } from '@/api/infra/test'
import { describe, expect, test } from '@jest/globals'

beforeEach((): void => {
  jest.setTimeout(60000)
})

describe('Datasources', () => {
  test('Should return a promise of created or updated Pokemon from mocked Datasource', async () => {
    const mockedParams = mockParams()
    const sut = new PokemonLikerPrismaDataSource(ctx.prisma)
    expect(sut.createOrUpdate(mockedParams)).toBeInstanceOf(Promise<Pokemon>)
  })

  test('Should return a promise of created or updated Pokemon from Datasource ', async () => {
    const mockedParams = mockParams()
    const sut = new PokemonLikerPrismaDataSource()
    expect(sut.createOrUpdate(mockedParams)).toBeInstanceOf(Promise<Pokemon>)
  })
})
