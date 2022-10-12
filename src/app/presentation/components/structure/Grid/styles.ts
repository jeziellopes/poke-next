import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  flex-flow: row wrap;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
