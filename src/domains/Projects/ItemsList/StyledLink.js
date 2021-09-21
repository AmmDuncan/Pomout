import styled from "styled-components";
import { Link } from "react-router-dom";

import breakpoints from "@utility/breakpoints";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text_400};
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  display: inline-flex;
  flex: 1 1 80%;
  height: 100%;
  align-items: center;
  padding-left: 1.6rem;

  &:hover {
    color: ${(props) => props.theme.text};
  }

  @media screen and ${breakpoints.tablet} {
    //font-size: 1.5rem;
  }
`;

export default StyledLink;
