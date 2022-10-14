import { HttpResponse } from '@/data/protocols/http'
import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient<T = any> implements HttpGetClient {
  async get(url: string): Promise<HttpResponse<T>> {
    let httpResponse: AxiosResponse<T>
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
