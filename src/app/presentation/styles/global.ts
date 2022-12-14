import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    height: 100%;
    margin: 0;
    text-rendering: optimizeLegibility;
  }

  body {
    overflow-x: hidden;
    /* overflow-y: hidden; */
    overscroll-behavior-y: none;
  }

  main {
    width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
    animation: all 1s ease-in-out;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background: #2f2f2f; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444; /* color of the scroll thumb */
    border: 3px solid #444; /* roundness of the scroll thumb */
    border-radius: 20px; /* creates padding around scroll thumb */
  }

  input {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    background-color: #1a1a1a;
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  button, label {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  button, button:hover, button:focus {
    border: none;
    outline: none;
  }
`
