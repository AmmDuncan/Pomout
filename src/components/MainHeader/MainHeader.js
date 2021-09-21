import styled from "styled-components";

import Card from "@components/Card/Card";
import breakpoints from "@utility/breakpoints";

const MainHeader = styled(Card)`
  background: ${(props) => props.theme.high_elevation};
  height: 7.2rem;
  min-height: 7.2rem;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
  text-align: center;
  letter-spacing: -0.035rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.075);
  // border: 1px solid ${(props) => props.theme.header_border};
  overflow-x: hidden;
  z-index: 10;

  h1 {
    font-size: 1.6rem;
    margin: 0;
    width: auto;
    flex-grow: 1;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    white-space: nowrap;
  }

  @media screen and ${breakpoints.tablet} {
    min-height: 6.4rem;
  }
`;

export default MainHeader;
