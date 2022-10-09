import { HttpResponse } from '@/data/protocols/http'

export interface HttpGetClient<T = any> {
  get(url: string): Promise<HttpResponse<T>>
}
