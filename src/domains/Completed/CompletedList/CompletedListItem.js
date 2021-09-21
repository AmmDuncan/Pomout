import styled from "styled-components";
import breakpoints from "@utility/breakpoints";
import { slideDown } from "@utility/animations";
import ListItem from "@components/ListItem/ListItem";

const CompletedListItem = styled(ListItem)`
  box-sizing: border-box;
  animation: ${slideDown};
  animation-fill-mode: both;
  padding: 0;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  transition: min-height 0.1s 0.3s ease, margin 0.1s 0.4s ease;
  max-height: 0;
  min-height: 0;
  overflow: hidden;
  opacity: 0;
  margin: 0;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.05);

  > a {
    color: ${(props) => props.theme.text};
  }

  > * {
    transition: max-height 0.05s ease;
    background: rgba(80, 150, 90, 0.03);

    .checkOption {
      svg {
        opacity: 1;
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
  }

  &.completed {
    max-height: 4.8rem;
    min-height: 4.8rem;
    overflow: visible;
    opacity: 1;
    margin-bottom: 0.4rem;
    align-items: center;

    .checkOption {
      svg {
        opacity: 1;
      }

      &:after {
        opacity: 0;
      }
    }

    > * {
      background: transparent;
      text-decoration: line-through;
      pointer-events: all;
      opacity: 1;
    }
    > a {
      color: ${(props) => props.theme.text_400};
    }
    section {
      background-image: linear-gradient(
        to left,
        ${(props) =>
          `${props.theme.high_elevation}ff,
          ${props.theme.high_elevation}ff,
          ${props.theme.high_elevation}ff,
          ${props.theme.high_elevation}00`}
      );
    }
  }

  > section {
    max-width: 0;
    overflow: hidden;
    transition: opacity 0.2s 0.3s ease, 0.4s ease;
  }

  &:hover,
  &:focus-within {
    > section {
      max-width: 20rem;
      right: 0;
      overflow: visible;
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

export default CompletedListItem;
