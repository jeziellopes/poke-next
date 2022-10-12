import { getEnv } from './env'

require('dotenv').config()

describe('Env', () => {
  test('Should return correct POKEAPI URL', () => {
    const sut = getEnv('POKE_API_URL')
    expect(sut).toBe('https://pokeapi.co/api/v2')
  })

  test('Should return correct API URL', () => {
    const sut = getEnv('API_URL')
    expect(sut).toBe('http://localhost:3000/api')
  })
})
