import { createGlobalStyle } from "styled-components";

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
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weights.regular};
    font-size: ${({ theme }) => theme.font.sizes[4]};
    line-height: ${({ theme }) => theme.font.height};
  }
`