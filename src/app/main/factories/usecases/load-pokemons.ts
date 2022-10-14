import { RemotePokemon } from '@/data/usecases'
import { PokemonResponseModel } from '@/domain/models'
import { AxiosHttpClient } from '@/infra/http'
import { getEndpoint, getEnv } from '@/main/config'

export const makePokemonsLoader = (): RemotePokemon => {
  const httpClient = new AxiosHttpClient<PokemonResponseModel>()

  return new RemotePokemon(
    `${getEnv('POKE_API_URL')}/${getEndpoint('pokemons')}`,
    httpClient
  )
}
