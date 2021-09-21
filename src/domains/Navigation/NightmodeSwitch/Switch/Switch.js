import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "@context/ThemeContext";
import { MoonIcon } from "@assets/Icons";

const Wrapper = styled.article`
  box-sizing: border-box;
  border-radius: 2rem;
  background: ${(props) => props.theme.nightmode_switch_bg};
  height: 2.6rem;
  width: 4.6rem;
  cursor: pointer;
  padding: 0.2rem;
  // ${(props) =>
    props.theme.theme === "d" ? "justify-content: flex-end" : ""};
`;

const InnerBall = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2.2rem;
  width: 2.2rem;
  box-shadow: 0 0.2rem rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.high_elevation};
  transition: 0.15s ease-out;
  ${(props) => (props.theme.theme === "d" ? "margin-left: 2rem" : "")};
`;

const Switch = (props) => {
  const theme = useContext(ThemeContext);
  const fill = theme.theme === "d" ? theme.text : null;

  return (
    <Wrapper theme={theme} onClick={props.clicked}>
      <InnerBall theme={theme}>
        <MoonIcon fill={fill} />
      </InnerBall>
    </Wrapper>
  );
};

export default Switch;
