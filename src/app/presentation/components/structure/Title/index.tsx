import { Props } from '@/presentation/types'
import React from 'react'

import * as S from './styles'

export const Title = ({ children, ...props }: Props) => {
  return <S.Title {...props}>{children}</S.Title>
}
