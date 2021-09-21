import styled from "styled-components";
import ScrollableContainer from "@components/Container/ScrollableContainer";
import { showUpFast } from "@utility/animations";

export const Container = styled(ScrollableContainer)`
  width: 85%;
  max-width: 62rem;
  padding-top: 3.2rem;
  animation: ${showUpFast};

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
    top: 5.6rem;
    width: 100%;
    height: 6.4rem;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.mid_elevation}df,
      ${(props) => props.theme.mid_elevation}00
    );
    pointer-events: none;
  }
`;
