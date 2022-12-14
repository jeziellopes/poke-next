import { POKEMONS_PER_PAGE_LIMIT } from '@/main/config'
import { usePaginationContext } from '@/presentation/contexts/Pagination'
import * as T from '@/presentation/types'
import {
  likePokemon,
  loadPokemons,
  loadPokemonsDetails,
  loadPokemonsLikes,
} from '@/presentation/useCases'
import { getPokemonIdFromUrl } from '@/presentation/utils'
import {
  PokemonViewModel,
  PokemonLikesViewModel,
} from '@/presentation/view-models'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type PokemonsContextType = {
  error: boolean
  loading: boolean
  count: number
  pokemons: PokemonViewModel[] | null
  pokemonsDetails: Record<number, PokemonViewModel> | null
  pokemonsLikes: Record<number, PokemonLikesViewModel> | null
  getPokemonById: (
    id: string | string[] | undefined
  ) => PokemonViewModel | undefined
  handleLikePokemon: (id: string) => void
  getPokemonLikes: (pokemon: PokemonViewModel) => number
  fetchPokemonDetails: (id: string) => void
}

export const PokemonsContext = createContext<PokemonsContextType>({
  error: false,
  loading: false,
  count: 0,
  pokemons: null,
  pokemonsDetails: null,
  pokemonsLikes: null,
  getPokemonById: () => undefined,
  handleLikePokemon: () => undefined,
  getPokemonLikes: () => 0,
  fetchPokemonDetails: () => undefined,
})

export const PokemonsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const [pokemons, setPokemons] = useState<PokemonViewModel[] | null>(null)
  const [pokemonsDetails, setPokemonsDetails] = useState<Record<
    number,
    PokemonViewModel
  > | null>(null)
  const [pokemonsLikes, setPokemonsLikes] = useState<Record<
    number,
    PokemonLikesViewModel
  > | null>(null)

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

  const finishLoading = () => setTimeout(() => setLoading(false), 500)

  const getPokemonById = (id: string | string[] | undefined) =>
    (pokemonsDetails || [])[Number(id)]

  const fetchPokemons = useCallback(async () => {
    setLoading(true)
    setPokemons(null)
    setPokemonsDetails(null)
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
      .finally(() => finishLoading())
  }, [offset])

  useEffect(() => {
    fetchPokemonsDetails()
    fetchPokemonsLikes()
  }, [pokemons])

  const fetchPokemonDetails = useCallback(
    (id: string) => {
      if (!id || !pokemonsDetails) return
      if ((pokemonsDetails || [])[Number(id)]) return
      setLoading(true)
      loadPokemonsDetails({ id, name: '' })
        .then((pokemonDetails) => {
          setPokemonsDetails((prev) => ({
            ...prev,
            [id]: pokemonDetails as PokemonViewModel,
          }))
        })
        .catch(() => setError(true))
        .finally(() => finishLoading())
    },
    [pokemonsDetails]
  )

  const fetchPokemonsDetails = useCallback(async () => {
    if (pokemons) {
      setLoading(true)
      const loadAllPokemonsDetails = Promise.all(
        pokemons.map(({ id, name }) => loadPokemonsDetails({ id, name }))
      )

      loadAllPokemonsDetails
        .then((allPokemonsDetails) =>
          setPokemonsDetails(
            allPokemonsDetails.reduce(
              (pokemonDetails, pokemon) => ({
                ...pokemonDetails,
                [pokemon.id]: pokemon,
              }),
              {} as Record<number, PokemonViewModel>
            )
          )
        )
        .catch(() => setError(true))
        .finally(() => finishLoading())
    }
  }, [pokemons])

  const fetchPokemonsLikes = useCallback(async () => {
    if (pokemons) {
      const pokemonsLikes = await loadPokemonsLikes()

      if (pokemonsLikes) {
        setPokemonsLikes(
          pokemonsLikes.reduce((likes, pokemonLike) => {
            if (pokemonLike?.pokemonId) {
              return {
                ...likes,
                [pokemonLike.pokemonId]: pokemonLike,
              }
            }
            return likes
          }, {} as Record<number, PokemonLikesViewModel>)
        )
      }
    }
  }, [pokemons])

  const handleLikePokemon = useCallback(
    async (id: string) => {
      const pokemon = await likePokemon({ id })
      setPokemonsLikes((prev) => ({
        ...prev,
        [id]: pokemon,
      }))
    },
    [setPokemonsLikes]
  )

  const getPokemonLikes = useCallback(
    (pokemon: PokemonViewModel) => {
      if (pokemonsLikes) {
        return pokemonsLikes[Number(pokemon.id)]?.likes ?? 0
      }
      return 0
    },
    [pokemonsLikes]
  )

  return (
    <PokemonsContext.Provider
      value={{
        error,
        loading,
        count,
        pokemons,
        pokemonsDetails,
        pokemonsLikes,
        getPokemonById,
        handleLikePokemon,
        getPokemonLikes,
        fetchPokemonDetails,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemonsContext = () => useContext(PokemonsContext)
