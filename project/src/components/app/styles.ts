import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter", "Arial", sans-serif;
    line-height: 20px;
    color: #050510;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`