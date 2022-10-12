import * as S from './styles'

type Props = {
  id?: string
  children: React.ReactNode
  withSearch?: boolean
}

export const Layout = ({ id, children }: Props) => {
  return (
    <S.Container id={id}>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
