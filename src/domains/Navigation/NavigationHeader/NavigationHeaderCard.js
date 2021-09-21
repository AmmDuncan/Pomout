import styled from "styled-components";

import Card from "@components/Card/Card";
import breakpoints from "@utility/breakpoints";

const NavigationHeaderCard = styled(Card)`
  height: 7.2rem;
  min-height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Major Mono Display", sans-serif;
  font-size: 1.8rem;
  line-height: 1;
  padding: 0 3.2rem;
  // border: 1px solid ${({ theme }) => theme.header_border};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.075);
  background: ${(props) => props.theme.high_elevation};

  @media screen and ${breakpoints.tablet} {
    height: 6.4rem;
    min-height: 6.4rem;
    //padding: 1.6rem;
  }
`;

export default NavigationHeaderCard;
