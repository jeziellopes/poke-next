import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonModel } from '@/domain/models'
import { Pokemon, RemotePokemonParams } from '@/domain/usecases'

export class RemotePokemon implements Pokemon {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<PokemonModel[]>
  ) {}

  load = async (params: RemotePokemonParams): Promise<PokemonModel[]> => {
    const httpResponse = await this.httpGetClient.get(
      `${this.url}?${new URLSearchParams(params)}`
    )
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:next-line
        return httpResponse.body
      case HttpStatusCode.server_error:
        throw new InternalServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
