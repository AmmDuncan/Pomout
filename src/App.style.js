import styled from "styled-components";

import breakpoints from "@utility/breakpoints";

const AppWrapper = styled.article`
  box-sizing: border-box;
  padding: 40px 0;
  height: 100vh;
  min-height: 40rem;
  transition: background-color 0s;

  ${(props) => `
    background: ${props.theme.background};
    color: ${props.theme.text}};`}

  @media ${breakpoints.tablet} {
    padding: 3vw 0;
  }
`;

export default AppWrapper;
