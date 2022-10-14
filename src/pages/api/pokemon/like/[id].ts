import { makePokemonLikerService } from '@/api/main/factories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonLikerService = makePokemonLikerService()
  const params = { id: Number(req.query.id) }

  try {
    const data = await pokemonLikerService.like(params)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
