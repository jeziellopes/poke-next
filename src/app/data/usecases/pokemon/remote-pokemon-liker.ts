import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonLikesModel } from '@/domain/models'
import { PokemonLiker, PokemonLikerParams } from '@/domain/usecases'

export class RemotePokemonLiker implements PokemonLiker {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<PokemonLikesModel>
  ) {}

  like = async (params: PokemonLikerParams): Promise<PokemonLikesModel> => {
    const httpResponse = await this.httpGetClient.get(
      `${this.url}/${params.id}`
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
