import { Breakpoints } from "./common";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 :root {
  --text-color: #222;
  --secondary-text-color: #767676;
  --background-footer-color: #CFCDCD;
  --accent-red-color: #a62334;
}

/* to hide arrows in input type="number"*/
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
min-width: ${Breakpoints.sm}px;


  font-family: 'Josefin Sans', sans-serif;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
  transition: background-color 300ms linear;
}

img {
  display: block;
  max-width: 100%;
}

ul,
ol {
  list-style: none;
}

a,
button {
  font-family: inherit;
  font-style: normal;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

input {
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
`;
