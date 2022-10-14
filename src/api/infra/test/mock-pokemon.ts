import { faker } from '@faker-js/faker'

export const mockPokemon = () => ({
  id: Number(faker.random.numeric()),
  pokemonId: Number(faker.random.numeric()),
  likes: Number(faker.random.numeric()),
  updatedAt: faker.datatype.datetime(),
  createdAt: faker.datatype.datetime(),
})
