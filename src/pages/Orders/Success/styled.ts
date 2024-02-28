import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;
`

export const Title = styled.h1``

export const SubTitle = styled.h4`
  margin: 1rem 0;
`

export const Table = styled.table`
  margin: 0 auto;
`
