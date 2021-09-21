import { createGlobalStyle } from "styled-components";

import breakpoints from "@utility/breakpoints";

const GlobalStyle = createGlobalStyle`
  
html {
  font-size: 10px;
  
  @media screen and (min-width: 1440px) {
    font-size: 11px;
  }
  
  @media screen and (min-width: 1640px) {
    font-size: 12px;
  }
  
}

body {
  margin: 0;
  font-family: "Inter",'Segoe UI', 'Roboto', 'Oxygen','Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  background: ${(props) => props.theme.background};
  //overflow: hidden;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


@media screen and ${breakpoints.tablet} {

  .desk-only {
    display: none;
  }
}
  `;

export default GlobalStyle;
