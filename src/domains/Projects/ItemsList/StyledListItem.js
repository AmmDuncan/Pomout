import styled from "styled-components";
import { slideDown } from "@utility/animations";
import ListItem from "@components/ListItem/ListItem";

import breakpoints from "@utility/breakpoints";

const StyledListItem = styled(ListItem)`
  box-sizing: border-box;
  animation: ${slideDown};
  animation-fill-mode: both;
  flex-flow: row nowrap;
  padding: 0;
  justify-content: space-between;
  position: relative;
  transition: min-height 0.15s 0.3s ease, margin 0.1s 0.3s ease;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.075);

  > section {
    max-width: 0;
    overflow: hidden;
    transition: opacity 0.2s 0.4s ease, 0.3s ease;
  }

  &:hover,
  &:focus-within {
    > section {
      max-width: 22rem;
      right: 0;
      overflow: visible;
    }
  }

  > * {
    transition: max-height 0.05s ease, opacity 0.1s 0.3s ease;
  }

  .checkOption {
    svg {
      opacity: 0;
      margin-top: 0.3rem;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0.3rem;
      background: ${(props) => props.theme.unfocused_icons};
      //background: rgba(255, 255, 255, 0.6);
      border: 1px solid #0e212522;
    }
  }

  &.completed {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    opacity: 0;
    margin: 0;

    > * {
      //color: rgba(80, 150, 90, 1);
      color: ${(props) => props.theme.text};
      text-decoration: line-through;
    }

    > a {
      opacity: 0;
    }

    .checkOption {
      svg {
        opacity: 0.7;
      }

      &:after {
        opacity: 0;
      }
    }
  }

  @media screen and ${breakpoints.tablet} {
    > section {
      max-width: 20rem;
      right: 0;
      overflow: visible;
    }
  }

  ${(props) =>
    props.showOptions
      ? `
    > section {
      max-width: 20rem;
      right: 0;
      overflow: visible;
    }
  `
      : ""}
`;

export default StyledListItem;
