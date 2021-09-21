import React from "react";
import { useDispatch } from "react-redux";

// import ThemeContext from "@context/ThemeContext";
import ListOfItems from "@domains/Projects/ItemsList/ListOfItems";
import CompletedListItem from "./CompletedListItem";
import PapersOnBoard from "@assets/illustrations/PapersOnBoard";
import withNotFound from "@hoc/withNotFound";
import { tasksSlice } from "@store";
import { useTasks } from "@hooks";

const CompletedTasks = () => {
  const tasks = useTasks();
  const dispatch = useDispatch();

  const toggleComplete = (taskId) => {
    dispatch(tasksSlice.actions.toggleComplete(taskId));
  };

  return withNotFound(ListOfItems, tasks, {
    // theme: theme,
    items: tasks,
    rootUrl: "/projects",
    listItem: CompletedListItem,
    illustration: <PapersOnBoard />,
    message: "No tasks completed",
    checkClicked: toggleComplete,
    proceedsProjectId: true,
    showOptions: true,
    checked: true,
    check: true,
    completed: true,
  });
};

export default CompletedTasks;
