import { RemotePokemonDetails } from '@/data/usecases'
import { PokemonDetailsModel } from '@/domain/models'
import { AxiosHttpClient } from '@/infra/http'
import { getEndpoint, getEnv } from '@/main/config'

export const makePokemonsDetailsLoader = (): RemotePokemonDetails => {
  const httpClient = new AxiosHttpClient<PokemonDetailsModel>()

  return new RemotePokemonDetails(
    `${getEnv('POKE_API_URL')}/${getEndpoint('pokemons')}`,
    httpClient
  )
}
