import { createGlobalStyle } from "styled-components";

import hamburguer from '../assets/icons-hamburger.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.hover};
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;

    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${hamburguer});
      opacity: 0.2;
    }

    * {
      position: relative;
    }
  }

  body, input, textarea, button, h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weights.regular};
    font-size: ${({ theme }) => theme.font.sizes[4]};
    line-height: ${({ theme }) => theme.font.height};
  }
`