import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Iceberg', cursive;
  }
  body{
    /* background-color: #000000; */
  }
  /* body, input, button {
    font: 14px Roboto, sans-serif;
  } */

  button {
    cursor: pointer;
  }
`;