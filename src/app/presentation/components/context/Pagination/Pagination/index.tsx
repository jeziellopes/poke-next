import { PaginationButton } from '@/components/context'
import { PrevIcon, NextIcon } from '@/components/icons'
import { usePaginationContext } from '@/presentation/contexts'
import React from 'react'

import * as S from './styles'

export const Pagination = () => {
  const { page, prevPage, nextPage } = usePaginationContext()

  return (
    <S.Container>
      <PaginationButton onClick={prevPage} disabled={page === 1}>
        <PrevIcon size={10} />
      </PaginationButton>
      <PaginationButton>{page}</PaginationButton>
      <PaginationButton onClick={nextPage}>
        <NextIcon size={10} />
      </PaginationButton>
    </S.Container>
  )
}
