import React, { useContext } from "react";

import ThemeContext from "@context/ThemeContext";
import ListOfItems from "@domains/Projects/ItemsList/ListOfItems";
import DrawingOnBoard from "@assets/illustrations/DrawingOnBoard";
import withNotFound from "@hoc/withNotFound";
import CompletedListItem from "./CompletedListItem";
import { useProjects } from "@hooks";
import { useDispatch } from "react-redux";
import { projectsSlice } from "@store";

const CompletedProjects = (props) => {
  const theme = useContext(ThemeContext);
  const projects = useProjects();
  const dispatch = useDispatch();

  const toggleComplete = (projectId) => {
    dispatch(projectsSlice.actions.toggleComplete(projectId));
  };

  return withNotFound(ListOfItems, projects, {
    theme: theme,
    items: projects,
    rootUrl: "/projects",
    postUrl: "/details",
    listItem: CompletedListItem,
    illustration: <DrawingOnBoard />,
    message: "No projects completed",
    checkClicked: toggleComplete,
    showOptions: true,
    checked: true,
    check: true,
    completed: true,
  });
};

export default CompletedProjects;
