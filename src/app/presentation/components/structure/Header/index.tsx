import { Props } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

export const Header = ({ children, ...props }: Props) => {
  return <S.Header {...props}>{children}</S.Header>
}
