import React, { useContext } from "react";

import ThemeContext from "@context/ThemeContext";
import NavigationItemStyle from "./NavigationItem.style";

const NavigationItem = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationItemStyle bb={props.bb ? true : false} theme={theme}>
      {props.children}
    </NavigationItemStyle>
  );
};

export default NavigationItem;
