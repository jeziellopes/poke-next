import { HttpPostClient } from '@/data/protocols/http/httpPostClient'

export class RemotePokemon {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async load(): Promise<void> {
    await this.httpClient.post(this.url)
  }
}
