import React, { useContext, forwardRef } from "react";

import ThemeContext from "@context/ThemeContext";
import NavigationOpenerWrapper from "./NavigationOpener.style";

const NavigationOpener = forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationOpenerWrapper
      ref={ref}
      theme={theme}
      {...props}
      onClick={props.toggleOpen}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </NavigationOpenerWrapper>
  );
});

export default NavigationOpener;
