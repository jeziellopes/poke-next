import * as T from '@/presentation/types'
import { loadPokemons } from '@/presentation/useCases'
import { PokemonModel } from '@/presentation/view-models'
import { createContext, useContext, useEffect, useState } from 'react'

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

  useEffect(() => {
    if (pokemons) return
    setLoading(true)
    const timer = setTimeout(() => fetchPokemons(), 100)
    return () => clearTimeout(timer)
  })

  const fetchPokemons = async () => {
    loadPokemons()
      .then(setPokemons)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

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
