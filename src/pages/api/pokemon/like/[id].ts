import { cors, runMiddleware } from '@/api/infra/http'
import { makePokemonLikerService } from '@/api/main/factories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonLikerService = makePokemonLikerService()
  const params = { id: Number(req.query.id) }

  // Run the middleware
  await runMiddleware(req, res, cors)

  try {
    const data = await pokemonLikerService.like(params)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}
