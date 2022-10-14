import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonDetailsModel } from '@/domain/models'
import { PokemonDetails, PokemonDetailsParams } from '@/domain/usecases'

export class RemotePokemonDetails implements PokemonDetails {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  load = async (params: PokemonDetailsParams): Promise<PokemonDetailsModel> => {
    const httpResponse = await this.httpGetClient.get(
      `${this.url}/${params.id}`
    )
    const pokemonDetails = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:next-line

        return {
          id: pokemonDetails?.id || params.id,
          name: pokemonDetails?.name || params.name,
          url: `${this.url}/${params.id}`,
          abilities: pokemonDetails?.abilities.map((item) => item.ability.name),
          base_experience: pokemonDetails?.base_experience,
          height: pokemonDetails?.height,
          stats: pokemonDetails?.stats.map((item) => ({
            base_stat: item.base_stat,
            name: item.stat.name,
          })),
          types: pokemonDetails?.types.map((item) => item.type.name),
          weight: pokemonDetails?.weight,
        }
      case HttpStatusCode.server_error:
        throw new InternalServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
