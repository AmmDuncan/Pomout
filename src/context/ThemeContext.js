import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import pop from "@assets/sounds/pop.mp3";
import uncheck2 from "@assets/sounds/uncheck_2.mp3";
import done from "@assets/sounds/done.mp3";

const lightTheme = {
  mode: "light",
  primary: "#4BAABF",
  primary_700: "#4795a7",
  primary_900: "#2f7d8d",
  text: "#0E2125",
  text_300: "#0E212566",
  text_400: "#0E2125bb",
  background: "#d5e2e5",
  // background: "#DBEDF1",
  mid_elevation: "#efefef",
  high_elevation: "#FcFcFc",
  border: "rgba(1, 14, 33, 0.05)",
  header_border: "rgba(14, 33, 37, .1)",
  nightmode_switch_bg: "#dfdfdf",
  unfocused_icons: "#E4E4E4",
};

const darkTheme = {
  mode: "dark",
  primary: "#4BAABF",
  primary_700: "#4795a7",
  primary_900: "#2f7d8d",
  text: "#e5e5e5",
  text_400: "#e5e5e5aa",
  text_300: "rgba(255,255,255,.4)",
  background: "#111415",
  mid_elevation: "#1d1f1f",
  high_elevation: "#242626",
  border: "rgba(255, 255, 255, 0.05)",
  header_border: "rgba(120, 124, 125, .1)",
  nightmode_switch_bg: "#4BAABF",
  unfocused_icons: "#484848",
};

const ThemeContext = createContext(lightTheme);

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("pom_theme") || "l";
  });

  const wrapSetTheme = (value) => {
    setTheme(value);
    localStorage.setItem("pom_theme", value);
  };

  const audio = {};
  audio.check = pop;
  audio.done = done;
  audio.uncheck2 = uncheck2;

  const contextValue =
    theme === "d" ? { ...lightTheme, ...darkTheme } : lightTheme;
  contextValue.theme = theme;
  contextValue.setTheme = wrapSetTheme;
  contextValue.audio = audio;

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={contextValue} {...props}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
