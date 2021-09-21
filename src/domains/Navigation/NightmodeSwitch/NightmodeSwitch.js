import React, { useContext } from "react";

import ThemeContext from "@context/ThemeContext";

import NightmodeSwitchStyle from "./NightmodeSwith.style";
import Switch from "./Switch/Switch";

let style = {};

const NightmodeSwitch = (props) => {
  const theme = useContext(ThemeContext);
  const currentTheme = theme.theme;
  const setTheme = theme.setTheme;

  const toggleTheme = () => {
    if (currentTheme === "d") setTheme("l");
    else setTheme("d");
  };

  if (props.style) style = { ...style, ...props.style };

  return (
    <NightmodeSwitchStyle hide={props.hide} theme={theme} style={style}>
      Night Mode
      <Switch clicked={toggleTheme} />
    </NightmodeSwitchStyle>
  );
};

export default NightmodeSwitch;
