import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 6px 36px;
  border-style: solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 3rem;

  text-align: center;
`

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Text = styled.h2``

export const Item = styled.span``

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
