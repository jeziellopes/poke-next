import axios from 'axios'

export class AxiosHttpClient {
  async get(url: string): Promise<void> {
    return axios.get(url)
  }
}
