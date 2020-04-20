import { createGlobalStyle } from 'styled-components';
import { down } from 'styled-breakpoints';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 65px;
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
  }
  input {
    font-family: "Montserrat";
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
`;

export default GlobalStyle;