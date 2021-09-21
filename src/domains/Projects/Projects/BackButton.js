import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CaretLeft } from "@assets/Icons";

const BackButtonWrapper = styled(Link)`
  background: ${(props) => props.theme.mid_elevation};
  text-decoration: none;
  color: ${(props) => props.theme.text_400};
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
  border-radius: 0.4rem;
  display: flex;
  font-size: 1.4rem;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme.text}22;
  }
`;

const BackButton = (props) => (
  <BackButtonWrapper {...props}>
    <CaretLeft theme={props.theme} />
    {props.content}
  </BackButtonWrapper>
);

export default BackButton;
