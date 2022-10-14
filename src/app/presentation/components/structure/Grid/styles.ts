import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  flex-flow: row wrap;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 24px 2em;

  @media only screen and (max-width: 500px) {
    padding: 8px 1em;
  }
`
