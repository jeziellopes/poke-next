import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Grid = ({ children, ...props }: Props) => {
  return <S.Container {...props}>{children}</S.Container>
}
