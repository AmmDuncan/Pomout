import styled from "styled-components";

import Container from "@components/Container/Container";
import breakpoints from "@utility/breakpoints";

const TimerContainerStyle = styled(Container)`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  perspective: 80rem;

  @media screen and ${breakpoints.tablet} {
    justify-content: flex-end;
    padding-bottom: 5.6rem;
  }
`;

export default TimerContainerStyle;
