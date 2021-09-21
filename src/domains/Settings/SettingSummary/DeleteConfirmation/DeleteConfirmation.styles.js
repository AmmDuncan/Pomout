import styled from "styled-components";
import Card from "@components/Card/Card";
import breakpoints from "@utility/breakpoints";
import { showUp } from "@utility/animations";

export const DeleteConfirmationWrapper = styled(Card)`
  width: 90%;
  max-width: 32rem;
  padding: 1.6rem 2.8rem;
  place-self: center;
  box-shadow: 0 1rem 2.4rem rgba(0, 0, 0, 0.1);
  animation: ${showUp};
  animation-delay: 0.15s;
  background-color: ${(props) => props.theme.high_elevation};

  h2,
  h3 {
    color: crimson;
    letter-spacing: -0.02rem;
    font-size: 2.4rem;
    margin: 2rem 0;
  }

  p {
    line-height: 1.7;
    color: ${(props) => props.theme.text}cc;
    margin-bottom: 3.2rem;
  }

  .ctas {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: 4.4rem;
    column-gap: 1.6rem;
    margin-bottom: 0.8rem;
    max-height: 4.4rem;
    width: 100%;

    button {
      height: 100%;
      margin: 0;
      box-sizing: border-box;
      border: none;
    }

    @media screen and ${breakpoints.tabletS} {
      max-height: fit-content;
      grid-template-columns: 1fr;
      grid-template-rows: 4.4rem 4.4rem;
      row-gap: 1.6rem;

      button {
        transform: scale(1);
      }

      button:first-of-type {
        grid-row: 2/3;
      }
    }
  }
`;
