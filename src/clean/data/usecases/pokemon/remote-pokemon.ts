import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import {
  HttpStatusCode,
  HttpResponse,
} from '@/data/protocols/http/http-response'
import { InternalServerError } from '@/domain/errors/internal-server-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

export class RemotePokemon {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async load(): Promise<HttpResponse> {
    const httpResponse = await this.httpGetClient.get(this.url)

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return Promise.resolve(httpResponse)
      case HttpStatusCode.server_error:
        throw new InternalServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
