import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto, Source Sans Pro';
    }
    body html #root {
    height: 100%;
  }
  body {
    overflow-x: hidden;
  }
`;