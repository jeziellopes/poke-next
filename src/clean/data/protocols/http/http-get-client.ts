import { HttpResponse } from '@/data/protocols/http'

export interface HttpGetClient<T> {
  get(url: string): Promise<HttpResponse<T>>
}
