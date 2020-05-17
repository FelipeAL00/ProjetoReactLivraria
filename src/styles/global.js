import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -webkit-image-smoothing: antialiased !important;
  }

  body , input , button {
    font-size: 1em;
    font-family: 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
