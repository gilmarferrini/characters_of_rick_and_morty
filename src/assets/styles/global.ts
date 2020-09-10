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
    background: #050517;
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
    width: 70vw;
    min-height: 100vh;
    background: #050517;
    border-radius: 1rem;

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }
  }

`;
