import { RemotePokemonLikes } from '@/data/usecases'
import { PokemonLikesModel } from '@/domain/models'
import { AxiosHttpClient } from '@/infra/http'
import { getEndpoint, getEnv } from '@/main/config'

export const makePokemonsLikesLoader = (): RemotePokemonLikes => {
  const httpClient = new AxiosHttpClient<PokemonLikesModel[]>()

  return new RemotePokemonLikes(
    `${getEnv('API_URL')}/${getEndpoint('pokemons_likes')}`,
    httpClient
  )
}
