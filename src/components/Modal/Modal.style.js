import styled from "styled-components";
import { show } from "../../utility/animations";

const ModalWrapper = styled.section`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(
    7,
    9,
    9,
    ${({ theme }) => (theme.theme === "d" ? "0.8" : "0.4")}
  );
  top: 0;
  left: 0;
  opacity: 1;
  pointer-events: auto;
  backdrop-filter: blur(0.2rem);
  transition: 0.5s ease;
  animation: ${show};

  //&.close {
  //  opacity: 0;
  //  pointer-events: none;
  //}

  @media screen and ${(props) => props.breakpoint} {
    display: grid;
  }
`;

export default ModalWrapper;
