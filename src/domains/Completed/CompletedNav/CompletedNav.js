import React, { useContext } from "react";
import CompletedNavWrapper from "./CompletedNavWrapper";
import CompletedNavItem from "./CompletedNavItem";
import ThemeContext from "@context/ThemeContext";

const CompletedNav = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <CompletedNavWrapper>
      <CompletedNavItem to="/completed/projects" theme={theme} exact>
        Projects
      </CompletedNavItem>
      <CompletedNavItem to="/completed/tasks" exact theme={theme}>
        Tasks
      </CompletedNavItem>
    </CompletedNavWrapper>
  );
};

export default CompletedNav;
