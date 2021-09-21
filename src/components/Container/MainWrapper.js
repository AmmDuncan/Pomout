import styled from "styled-components";

import TimerContainer from "@domains/Timer/TimerContainer/TimerContainer.style";
import breakpoints from "@utility/breakpoints";

const MainWrapper = styled(TimerContainer)`
  background: ${(props) => props.theme.mid_elevation};
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05);
  transition: background-color 0s ease-out;

  @media screen and ${breakpoints.tablet} {
    justify-content: flex-end;
    padding-bottom: 0;
  }
`;

export default MainWrapper;
