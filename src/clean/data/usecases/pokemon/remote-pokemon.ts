import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonModel } from '@/domain/models'
import { Pokemon } from '@/domain/usecases'

export class RemotePokemon implements Pokemon {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<PokemonModel[]>
  ) {}

  async load(): Promise<PokemonModel[]> {
    const httpResponse = await this.httpGetClient.get(this.url)

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.server_error:
        throw new InternalServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
