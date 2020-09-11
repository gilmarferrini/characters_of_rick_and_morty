import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font: 16px Roboto, sans-serif;
    background: #161925;
    width: 100vw;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Ubuntu', sans-serif;
    color: #ffffff;
  }

  #app {
    max-width: 820px;
    min-height: 100vh;
    border-radius: 1rem;

    margin: 0 auto;

    a {
      text-decoration: none;
    }
  }

`;
