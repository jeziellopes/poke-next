import { ButtonProps } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

export const PaginationButton = ({ children, ...props }: ButtonProps) => {
  return <S.Container {...props}>{children}</S.Container>
}
