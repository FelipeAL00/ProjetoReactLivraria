import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');

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
    font-family: 'Chelsea Market', cursive;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
