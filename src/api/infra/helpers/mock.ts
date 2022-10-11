import { faker } from '@faker-js/faker'

export const mockedPokemon = {
  id: faker.datatype.uuid(),
  name: faker.random.word(),
  likes: Number(faker.random.numeric()),
  createdAt: faker.datatype.datetime(),
}
