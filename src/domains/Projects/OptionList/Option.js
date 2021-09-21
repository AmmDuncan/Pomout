import styled from "styled-components";
import Button from "@components/Button/Button";

const Option = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1.1/1;
  padding: 0 1.4rem;
  cursor: pointer;
  position: relative;

  svg > path {
    transition: 0.2s ease-out;
  }

  &:hover {
    background: ${(props) => props.theme.background}33;

    svg > path {
      fill: ${(props) => props.theme.text}ef;
    }
  }
`;

export default Option;
