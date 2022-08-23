import { Link as LinkRouterDom } from 'react-router-dom'
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`

export const Logo = styled.h1`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes[5]};
`

export const Links = styled.nav`
  display: flex;
  gap: 1rem;
`

export const Link = styled(LinkRouterDom)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
