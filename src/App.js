import React, { useContext, useEffect } from "react";

import AppWrapper from "./App.style";

import ThemeContext from "@context/ThemeContext";
import Layout from "@components/Layout/Layout";
import Container from "@components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { timerSlice } from "@store";
import {
  useFetchProjects,
  useFetchSettings,
  useFetchTasks,
  useProjects,
  useTasks,
  useTimerWithProjectId,
} from "./hooks";

function App() {
  useFetchTasks();
  useFetchProjects();
  useFetchSettings();

  const theme = useContext(ThemeContext);
  const timer = useSelector((state) => state.timer);
  const { remaining, elapsed } = timer;
  const dispatch = useDispatch();
  const timeRemaining = remaining - elapsed;
  const timerWithProjectId = useTimerWithProjectId();
  const activeTask = useSelector((state) => state.timer.activeTask);
  const tasks = useTasks();

  useEffect(() => {
    if (typeof Notification !== "undefined") {
      if (
        Notification.permission === "default" ||
        Notification.permission === "denied"
      ) {
        Notification.requestPermission().then((permission) =>
          console.log(permission)
        );
      }
    }
  });

  useEffect(() => {
    if (timeRemaining === 0) {
      dispatch(timerSlice.actions.playSound(theme.audio.done));
      dispatch(timerSlice.actions.end(timerWithProjectId));
      const showNotification = document.visibilityState !== "visible";
      if (showNotification) {
        const permissionGranted = Notification.permission === "granted";
        if (permissionGranted) {
          const title = "POMOUT";
          const task = activeTask
            ? tasks.find((task) => task.id === activeTask)
            : null;
          const body = `Timer${task ? " " + task.name : " "} Complete`;
          const notification = new Notification(title, { body });
          notification.onclick = () => {
            window.parent.focus();
            notification.close();
          };
        }
      }
    }
  }, [timeRemaining, theme, dispatch]);

  return (
    <AppWrapper theme={theme}>
      <Container>
        <Layout />
      </Container>
    </AppWrapper>
  );
}

export default App;
