import { makePokemonsLoaderService } from '@/api/main/factories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonsLoaderService = makePokemonsLoaderService()

  try {
    const data = await pokemonsLoaderService.load()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}
