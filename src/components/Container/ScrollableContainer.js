import styled from "styled-components";
import Container from "./Container";

const ScrollableContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0rem;
  }

  &::-webkit-scrollbar-track {
    width: 0rem;
  }

  &::-webkit-scrollbar-thumb {
    width: 0.4rem;
  }
`;

export default ScrollableContainer;
