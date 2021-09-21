import styled from "styled-components";

import breakpoints from "@utility/breakpoints";

const { tablet } = breakpoints;

const LayoutTemplate = styled.section`
  display: flex;
  flex-flow: row nowrap;
  height: calc(100vh - 80px);
  //max-height: 66rem;

  > .sidebarContainer {
    margin-right: 1.6rem;
    flex-basis: 27.2rem;
    flex-shrink: 0;
  }

  > .main {
    flex-basis: 100%;
  }

  @media screen and ${tablet} {
    flex-flow: column nowrap;
    height: calc(100vh - 6vw);
    min-height: 37rem;

    > .sidebarContainer {
      margin-right: 0;
      margin-bottom: 3vw;
      flex-basis: 6.4rem;
    }

    > main {
      height: 100%;
      overflow: hidden;
      flex: 1 1 auto;
    }
  }
`;

export default LayoutTemplate;
