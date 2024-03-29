import { createGlobalStyle } from 'styled-components';
import "normalize.css";

const GlobalStyles = createGlobalStyle`

  html {

    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #fafafa;
    --green: #599b44;
    --darkgrey: #333332;

    --primary: #557a95;
    --secondary: #7395ae;
    --tertiary: #16253f;
    --quaternary: #b1a296;
    --quinary: #5d5c61;

    font-size: 10px;

  }

  html {
    background: #c9dbe9;
    background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 60%);
    background: -linear-gradient(top, #c9dbe9 0%, #fff 60%);
    background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 60%);
  }
  
  body {
    font-family: "Open Sans", sans-serif;
    src: url("../fonts/OpenSans-Regular.ttf");
    -webkit-font-smoothing: antialiased;
    font-size: 2rem;
    line-height: 1.75;
    color: var(--black);
    width: 100vw;
    overflow-x: hidden; /* Hide horizontal scrollbar */

    h1, h2, h3, h4, h5, h6 {
      font-family: "Montserrat", sans-serif;
      src: url("../fonts/Montserrat-Regular.ttf");
      color: var(--tertiary);
    }

    button.primary {
      background-color: var(--white);
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      color: var(--tertiary);
      border: solid 1px var(--tertiary);
      padding: 0 15px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--tertiary);
        color: var(--white);
      }
    }

    button.secondary {
      background-color: var(--tertiary);
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      color: var(--white);
      padding: 0 15px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--white);
        color: var(--tertiary);
      }
    }

    a {
      color: var(--primary);
    }

    .highlight {
      background-color: #fff2ac;
      background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
    }

  }
  
`;

export default GlobalStyles;