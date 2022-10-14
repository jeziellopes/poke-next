import { RemotePokemonLiker } from '@/data/usecases'
import { PokemonLikesModel } from '@/domain/models'
import { AxiosHttpClient } from '@/infra/http'
import { getEndpoint, getEnv } from '@/main/config'

export const makePokemonLiker = (): RemotePokemonLiker => {
  const httpClient = new AxiosHttpClient<PokemonLikesModel>()

  return new RemotePokemonLiker(
    `${getEnv('API_URL')}/${getEndpoint('pokemon_like')}`,
    httpClient
  )
}
