import { HttpResponse } from '@/data/protocols/http'
import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    const httpResponse = await axios.get(url)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
