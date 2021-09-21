import styled from "styled-components";

import breakpoints from "@utility/breakpoints";
import Card from "../../../components/Card/Card";

const { tablet } = breakpoints;

const SidebarCard = styled(Card)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: calc(100vh - 80px);
  //max-height: 66rem;

  @media screen and ${tablet} {
    width: 100%;
    max-width: 100%;
    height: 6.4rem;
  }
`;

export default SidebarCard;
