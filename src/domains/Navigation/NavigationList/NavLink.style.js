import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 0 3.2rem;
  transition: 0.2s ease-out;
  color: ${(props) => props.theme.text};

  &.active {
    position: relative;
    color: ${(props) => props.theme.primary};

    svg > path {
      fill: ${(props) => props.theme.primary} !important;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 5%;
      height: 90%;
      width: 0.4rem;
      border-top-right-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      background: ${(props) => props.theme.primary};
    }
  }
`;

export default StyledNavLink;
