import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }
  body {
    color: ${({ theme }) => theme.font.lightDefault};
  }
  body::-webkit-scrollbar {
    width: 10px;
  } 
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.font.lightDefault};
    outline: ${({ theme }) => `1px solid ${theme.font.lightDefault}`};
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
