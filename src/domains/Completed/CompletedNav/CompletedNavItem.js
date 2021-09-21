import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CompletedNavItem = styled(NavLink)`
  //box-sizing: border-box;
  position: relative;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;
  margin: 0 0.4rem;
  min-width: 6rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.high_elevation};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: transform 0.1s ease-out;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    transform: translateY(-0.2rem);

    &:after {
      content: "";
      position: absolute;
      bottom: -1.2rem;
      width: 0;
      height: 0;
      border: 0.6rem solid transparent;
      border-top: 0.6rem solid ${({ theme }) => theme.primary};
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export default CompletedNavItem;
