import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import { theme } from "./theme";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
 
  html{
  scroll-behavior: smooth;
}
  button {
    cursor: pointer;
  }
`;
export const Explica = styled.h4`
  color:${theme.colors.font2};
  font-size: 0.8em;
  text-align: left;
  margin-bottom: 0.5em;
`