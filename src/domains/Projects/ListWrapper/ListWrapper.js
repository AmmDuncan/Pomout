import styled from "styled-components";

import breakpoints from "@utility/breakpoints";
import ScrollableContainer from "@components/Container/ScrollableContainer";

const ListWrapper = styled(ScrollableContainer)`
  width: 85%;
  max-width: 66rem;
  padding: 4.8rem 0.2rem 2.4rem;
  overflow-y: scroll;
  overflow-x: visible;
  scrollbar-width: none;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6.4rem;
    background-image: linear-gradient(
      to top,
      ${(props) => props.theme.mid_elevation}ef,
      ${(props) => props.theme.mid_elevation}00
    );
    pointer-events: none;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 6.4rem;
    width: 100%;
    height: 8rem;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.mid_elevation}fa,
      ${(props) => props.theme.mid_elevation}00
    );
    pointer-events: none;
  }

  @media screen and ${breakpoints.tablet} {
    top: 6.4rem;
  }
`;

export default ListWrapper;
