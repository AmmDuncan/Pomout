import styled from "styled-components";

import NavigationItemStyle from "../NavigationList/NavigationItem/NavigationItem.style";

import breakpoints from "@utility/breakpoints";

const NightmodeSwitchStyle = styled(NavigationItemStyle)`
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 3.2rem;
  height: 5.4rem;
  background: ${(props) => props.theme.high_elevation};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.075);

  @media ${breakpoints.tablet} {
    ${(props) => (props.hide ? "display: none; margin-top: 4rem;" : "")}
  }
`;

export default NightmodeSwitchStyle;
