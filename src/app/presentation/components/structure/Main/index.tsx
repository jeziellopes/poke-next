import { Props } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

export const Main = ({ children, ...props }: Props) => {
  return <S.Main {...props}>{children}</S.Main>
}
