import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  }

  async get(url: string): Promise<HttpResponse> {
    this.url = url
    return Promise.resolve(this.response)
  }
}
