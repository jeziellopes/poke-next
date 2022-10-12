import { RemotePokemon } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'
import { getEnv } from '@/main/config'

import { getEndpoint } from './../../config/endpoints'

export const makePokemonsLoader = (): RemotePokemon => {
  const httpClient = new AxiosHttpClient()

  return new RemotePokemon(
    `${getEnv('POKE_API_URL')}/${getEndpoint('pokemons')}`,
    httpClient
  )
}
