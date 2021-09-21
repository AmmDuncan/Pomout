import styled from "styled-components";
import { useSelector } from "react-redux";

import { convertTime } from "@utility/functions/general";

const StyledTime = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  padding: 4.8rem 3.2rem 1.2rem;
  flex-grow: 2;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;
`;

export const MiniTimeWrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.mid_elevation}88;
  height: 100%;
  width: 20%;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const Time = (props) => {
  const { remaining, elapsed } = useSelector((state) => state.timer);
  const timeRemaining = remaining - elapsed;
  const { minutes, seconds } = convertTime(timeRemaining);
  const WrappingComponent = props.wrapper ? props.wrapper : StyledTime;

  return (
    <WrappingComponent>
      {minutes}:{seconds}
    </WrappingComponent>
  );
};

export default Time;
