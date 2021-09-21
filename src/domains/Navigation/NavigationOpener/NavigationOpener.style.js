import styled, { css } from "styled-components";

import breakpoints from "@utility/breakpoints";

const NavigationOpenerWrapper = styled.article`
  height: 2.8rem;
  display: none;
  align-self: center;
  align-items: flex-end;
  flex-flow: column nowrap;
  justify-content: space-around;
  border-radius: 4px;
  margin: 4px;
  //padding: 0.4rem;
  cursor: pointer;
  transition: 0.3s ease-out;

  .bar {
    width: 2.8rem;
    height: 2px;
    display: inline-block;
    border-radius: 8px;
    background: ${(props) => props.theme.text};
    transition: inherit;

    &:nth-child(2) {
      width: 2rem;
      align-self: flex-end;
    }
  }

  @media screen and ${breakpoints.tablet} {
    display: flex;
    box-sizing: content-box;

    ${(props) =>
      props.open
        ? css`
      height: 2.85rem;
      .bar {
        // margin-right: 0.5rem;

        &:nth-child(1) {
          transform: rotate(-45deg);
          transform-origin: top right;
        }

        &:nth-child(2) {
          align-self: center;
          width: 0;
        }

        &:nth-child(3) {
          transform: rotate(45deg);
          transform-origin: bottom right;
        }
    `
        : ""}
  }
`;

export default NavigationOpenerWrapper;
