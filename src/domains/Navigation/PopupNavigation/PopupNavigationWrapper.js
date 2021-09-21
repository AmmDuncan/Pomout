import styled from "styled-components";

import Card from "@components/Card/Card";

const PopupNavigationWrapper = styled(Card)`
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: 70vh;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.header_border};
  left: 0;
  top: 100vh;
  transition: 0.3s ease-out, background-color 0s ease;
  display: none;

  &.open {
    top: 30vh;
  }

  @media screen and ${(props) => props.breakpoint} {
    display: flex;
    flex-flow: column;
  }
`;

export default PopupNavigationWrapper;
