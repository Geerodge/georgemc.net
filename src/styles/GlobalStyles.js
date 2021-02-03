import { createGlobalStyle } from 'styled-components';
import "normalize.css";

import "@fontsource/montserrat/500.css";
import "fontsource-open-sans";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --green: #599b44;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;