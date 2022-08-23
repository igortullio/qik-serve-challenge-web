import styled from 'styled-components'

export const Wrapper = styled.li`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;

  text-align: center;
`

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes[5]};
`

export const Price = styled.h4`
  font-family: 'DynaPuff';
  font-weight: ${({ theme }) => theme.font.weights.regular};
`

export const Button = styled.button`
  width: 100%;

  background: ${({ theme }) => theme.colors.text};
  border-radius: 6px 36px;

  cursor: pointer;
  border: none;
  text-transform: uppercase;


  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`
