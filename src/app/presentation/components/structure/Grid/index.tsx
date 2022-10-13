import { Props } from '@/presentation/types'

import * as S from './styles'

export const Grid = ({ children, ...props }: Props) => {
  return <S.Container {...props}>{children}</S.Container>
}
