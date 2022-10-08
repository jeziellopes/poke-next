import { HttpGetClient } from '@/data/protocols/http/http-get-client'

export class RemotePokemon {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpGetClient
  ) {}

  async load(): Promise<void> {
    await this.httpClient.get(this.url)
  }
}
