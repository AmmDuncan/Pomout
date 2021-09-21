import styled from "styled-components";

import Card from "@components/Card/Card";

const NavigationItemStyle = styled(Card)`
  display: flex;
  align-items: center;
  font-family: "inter", sans-serif;
  font-size: 1.8rem;
  line-height: 1;
  height: 5.4rem;
  background: ${(props) => props.theme.high_elevation};

  ${(props) =>
    props.bb ? `border-bottom: 1px solid ${props.theme.border}` : ""}
`;

export default NavigationItemStyle;
