import { POKEMONS_PER_PAGE_LIMIT } from '@/main/config'
import * as T from '@/presentation/types'
import { loadPokemons, loadPokemonsDetails } from '@/presentation/useCases'
import { PokemonViewModel } from '@/presentation/view-models'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getPokemonIdFromUrl } from '../utils'
import { usePaginationContext } from './Pagination'

export type PokemonsContextType = {
  error: boolean
  loading: boolean
  count: number
  pokemons: PokemonViewModel[] | null
  pokemonsDetails: PokemonViewModel[] | null
}

export const PokemonsContext = createContext<PokemonsContextType>({
  error: false,
  loading: false,
  count: 0,
  pokemons: null,
  pokemonsDetails: null,
})

export const PokemonsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [pokemons, setPokemons] = useState<PokemonViewModel[] | null>(null)
  const [pokemonsDetails, setPokemonsDetails] = useState<
    PokemonViewModel[] | null
  >(null)
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
      .then((data) => {
        setCount(data.count)
        setPokemons(
          data.results.map((result) => ({
            ...result,
            id: String(Number(getPokemonIdFromUrl(result.url))),
          }))
        )
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [offset])

  useEffect(() => {
    fetchPokemonsDetails()
  }, [pokemons])

  const fetchPokemonsDetails = useCallback(async () => {
    if (pokemons) {
      const allPokemonsDetails = await Promise.all(
        pokemons.map(({ id, name }) => loadPokemonsDetails({ id, name }))
      )

      setPokemonsDetails(allPokemonsDetails)
    }
  }, [pokemons])

  return (
    <PokemonsContext.Provider
      value={{
        error,
        loading,
        count,
        pokemons,
        pokemonsDetails,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemonsContext = () => useContext(PokemonsContext)
