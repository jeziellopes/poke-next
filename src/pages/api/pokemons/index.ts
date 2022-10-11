import { makePokemonsLoaderService } from '@/api/main/factories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonsLoaderService = makePokemonsLoaderService()

  try {
    const data = await pokemonsLoaderService.load()
    res.status(200).json({ statusCode: 200, data })
  } catch (error) {
    res.status(400).json({ statusCode: 400, error: error.message })
  }
}
