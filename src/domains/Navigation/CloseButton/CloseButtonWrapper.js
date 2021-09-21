import styled from "styled-components";

import Card from "../../../components/Card/Card";

const CloseButtonWrapper = styled(Card)`
  position: fixed;
  bottom: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  height: 6.4rem;
  width: 6.4rem;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.3);
  background: ${(props) => props.theme.high_elevation};
  cursor: pointer;
  transition: 0.2s ease-out, background-color 0s;

  &.close {
    transform: translateY(10rem) translateX(-50%);
    opacity: 0;
  }

  @media screen and ${(props) => props.breakpoint} {
    display: flex;
    flex-flow: column;
  }
`;

export default CloseButtonWrapper;
