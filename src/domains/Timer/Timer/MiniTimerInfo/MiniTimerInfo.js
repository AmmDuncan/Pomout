import styled from "styled-components";

import Card from "@components/Card/Card";
import breakpoints from "@utility/breakpoints";

const MiniTimerInfo = styled(Card)`
  box-sizing: border-box;
  width: 100%;
  max-width: 27.2rem;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: center;
  height: 7.2rem;
  max-height: 7.2rem;
  padding: 1.2rem 1.6rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
  0 1px 2px inset rgba(255, 255, 255, 0.075);
  //border: 1px solid ${(props) => props.theme.header_border};
  background: ${(props) => props.theme.high_elevation};
  transition: .15s ease-out, background-color 0s;   
  ${(props) =>
    props.hide
      ? "max-height: 0; height:0; overflow: hidden; min-height: 0; margin: 0 !important; padding: 0 1.6rem !important;"
      : ""}

  .task {
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    white-space: nowrap;
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    width: 70%;
    color: ${(props) => props.theme.text}
  }

  .project {
    width: 70%;
    color: ${(props) => props.theme.text_300};
  }

  .mini-time {
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.mid_elevation}88;
    height: 100%;
    width: 20%;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media screen and ${breakpoints.tablet} {

    ${(props) => (props.inSidebar ? `display: none;` : "")}
  }
  
  @media screen and (max-height: ${(props) => props.removeHeight}) {
    display: none;
  }
}
`;

export default MiniTimerInfo;
