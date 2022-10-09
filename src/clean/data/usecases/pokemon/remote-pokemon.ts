import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InternalServerError } from '@/domain/errors/internal-server-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { PokemonModel } from '@/domain/models/pokemon-model'
import { Pokemon } from '@/domain/usecases/pokemon'

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
