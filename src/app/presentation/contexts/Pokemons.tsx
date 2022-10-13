import { POKEMONS_PER_PAGE_LIMIT } from '@/main/config'
import * as T from '@/presentation/types'
import { loadPokemons } from '@/presentation/useCases'
import { PokemonModel } from '@/presentation/view-models'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { usePaginationContext } from './Pagination'

export type PokemonsContextType = {
  error: boolean
  loading: boolean
  pokemons: PokemonModel[] | null
}

export const PokemonsContext = createContext<PokemonsContextType>({
  error: false,
  loading: false,
  pokemons: null,
})

export const PokemonsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonModel[] | null>(null)
  const [offset, setOffset] = useState('0')
  const [limit] = useState(POKEMONS_PER_PAGE_LIMIT)
  const { page } = usePaginationContext()

  useEffect(() => {
    if (pokemons) return
    setLoading(true)
    const timer = setTimeout(() => fetchPokemons(), 100)
    return () => clearTimeout(timer)
  })

  useEffect(
    () => setOffset(String((page - 1) * Number(POKEMONS_PER_PAGE_LIMIT))),
    [page]
  )

  useEffect(() => {
    fetchPokemons()
  }, [offset])

  const fetchPokemons = useCallback(async () => {
    loadPokemons({ offset, limit })
      .then(setPokemons)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [offset])

  return (
    <PokemonsContext.Provider
      value={{
        error,
        loading,
        pokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemonsContext = () => useContext(PokemonsContext)
