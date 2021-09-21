import React, { useContext } from "react";

import ThemeContext from "@context/ThemeContext";
import NavigationListWrapper from "./NavigationListWrapper";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavLink from "./NavLink.style";

import {
  TimerIcon,
  ProjectsIcon,
  CompletedIcon,
  SettingsIcon,
} from "@assets/Icons";

const iconStyle = {
  display: "inline-block",
  marginRight: "1.2rem",
};

let style = {};

const NavigationList = (props) => {
  const theme = useContext(ThemeContext);
  const fill = theme.theme === "d" ? theme.text : null;

  if (props.style) style = { ...style, ...props.style };

  return (
    <NavigationListWrapper
      hide={props.hide}
      theme={theme}
      style={style}
      onClick={props.onClick}
    >
      <NavigationItem bb>
        <NavLink theme={theme} to="/" exact>
          <span style={iconStyle}>
            <TimerIcon fill={fill} />
          </span>
          Timer
        </NavLink>
      </NavigationItem>
      <NavigationItem bb>
        <NavLink theme={theme} to="/projects">
          <span style={iconStyle}>
            <ProjectsIcon fill={fill} />
          </span>
          Projects
        </NavLink>
      </NavigationItem>
      <NavigationItem bb>
        <NavLink theme={theme} to="/completed">
          <span style={iconStyle}>
            <CompletedIcon fill={fill} />
          </span>
          Completed
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink theme={theme} to="/settings" exact>
          <span style={iconStyle}>
            <SettingsIcon fill={fill} />
          </span>
          Settings
        </NavLink>
      </NavigationItem>
    </NavigationListWrapper>
  );
};

export default NavigationList;
