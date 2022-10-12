import { HttpResponse } from '@/data/protocols/http'
import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    let httpResponse: AxiosResponse<any>
    try {
      httpResponse = await axios.get(url)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
