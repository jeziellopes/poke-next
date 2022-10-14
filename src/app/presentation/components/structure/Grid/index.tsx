import { Props } from '@/presentation/types'

import * as S from './styles'

export const Grid = ({ children, ...props }: Props) => {
  return (
    <S.Container data-testid="grid-component" {...props}>
      {children}
    </S.Container>
  )
}
