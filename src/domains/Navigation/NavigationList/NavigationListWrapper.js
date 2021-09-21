import styled from "styled-components";
import Card from "@components/Card/Card";

import breakpoints from "@utility/breakpoints";

const NavigationListWrapper = styled(Card)`
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.075);

  @media ${breakpoints.tablet} {
    ${(props) => (props.hide ? "display: none;" : "")}
  }
`;

export default NavigationListWrapper;
