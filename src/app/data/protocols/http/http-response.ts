export enum HttpStatusCode {
  server_error = 500,
  badRequest = 400,
  ok = 200,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
