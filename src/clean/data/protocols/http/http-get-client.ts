import { HttpResponse } from '@/data/protocols/http/http-response'

export interface HttpGetClient<T> {
  get(url: string): Promise<HttpResponse<T>>
}
