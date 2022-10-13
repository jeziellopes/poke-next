import { Props } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

export const PaginationWrapper = ({ children, ...props }: Props) => {
  return <S.Container {...props}>{children}</S.Container>
}
