import * as T from '@/presentation/types'
import React, { createContext, useContext, useState } from 'react'

export type PaginationContextType = {
  page: number
  prevPage: () => void
  nextPage: () => void
}

export const PaginationContext = createContext<PaginationContextType>({
  page: 0,
  prevPage: () => undefined,
  nextPage: () => undefined,
})

export const PaginationProvider = ({ children }: T.Props) => {
  const [page, setPage] = useState(1)

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev - 1)

  return (
    <PaginationContext.Provider
      value={{
        page,
        prevPage,
        nextPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export const usePaginationContext = () => useContext(PaginationContext)
