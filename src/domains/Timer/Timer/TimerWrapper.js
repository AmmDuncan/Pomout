import styled from "styled-components";

import breakpoints from "@utility/breakpoints";

const TimerWrapper = styled.article`
  position: relative;
  width: 85%;
  max-width: 26rem;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 6.4rem auto 1.6rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.high_elevation};
  box-shadow: 0 1.6rem 2rem -0.8rem rgba(05, 05, 05, 0.2),
    0 -1.2rem 2.4rem inset rgba(05, 05, 05, 0.15);
  transform: perspective(40rem) rotateX(10.5deg);
  overflow: hidden;

  &:before {
    content: "Break";
    //letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 600;
    top: ${(props) => (props.break ? "1rem" : "-3rem")};
    position: absolute;
    background-color: ${(props) => props.theme.text}aa;
    color: ${(props) => props.theme.high_elevation};
    border-radius: 2rem;
    padding: 0.3rem 0.8rem;
    font-size: 1.4rem;
    transition: 0.15s ease;
  }

  .ctas {
    width: 100%;
    background: rgba(140, 140, 140, 0.045);
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1.2rem 0 2.8rem;

    .btn-light {
      background: rgba(253, 253, 253, 0.9);

      &:hover {
        background: #fff;
      }
    }
  }

  @media screen and ${breakpoints.tablet} {
    margin-top: 1.6rem;
    margin-bottom: 6.4rem;
  }

  @media screen and (max-height: 460px) {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

export default TimerWrapper;
