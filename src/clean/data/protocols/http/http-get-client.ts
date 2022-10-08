import { HttpResponse } from '@/data/protocols/http/http-response'

export interface HttpGetClient {
  get(url: string): Promise<HttpResponse>
}
