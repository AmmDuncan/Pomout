import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { projectsSlice, timerSlice, tasksSlice, settingsSlice } from "@store";

export const useProjects = () => useSelector((state) => state.projects);

export const useTasks = (projectId = null) => {
  const tasks = useSelector((state) => state.tasks);
  if (projectId) {
    const relatedTasks = tasks.filter((task) => task.projectId === projectId);
    return [tasks, relatedTasks];
  }
  return tasks;
};

export const useSettings = () => useSelector((state) => state.settings);

export const useActiveTaskAndProject = (activeTask) => {
  const tasks = useTasks();
  const projects = useProjects();
  let task, project;
  if (activeTask) {
    task = tasks.find((task) => task.id === activeTask);
    project = projects.find((project) => project.id === task.projectId);
  }

  return { task, project };
};

export const useFetchProjects = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  if (!projects) {
    dispatch(projectsSlice.actions.fetchInitial());
  }
};

export const useFetchTasks = () => {
  const projects = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  if (!projects) {
    dispatch(tasksSlice.actions.fetchInitial());
  }
};

export const useFetchTimer = () => {
  const projects = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  if (!projects) {
    dispatch(timerSlice.actions.fetchInitial());
  }
};

export const useFetchSettings = () => {
  const projects = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  if (!projects) {
    dispatch(settingsSlice.actions.fetchInitial());
  }
};

export const useSettingsEffect = (initialValue, actionCreator) => {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(initialValue);
  const [save, setSave] = useState(null);

  useEffect(() => {
    clearTimeout(save);
    setSave(null);
    // setSave(
    //   setTimeout(() => {
    dispatch(actionCreator(settings));
    // }, 10)
    // );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionCreator, settings, dispatch]);

  return [settings, setSettings];
};

export const useTimerWithProjectId = () => {
  const timer = useSelector((state) => state.timer);
  const activeTask = useSelector((state) => state.timer.activeTask);
  const tasks = useTasks();
  const projects = useProjects();
  let timerWithProjectId = { ...timer };
  if (activeTask) {
    const task = tasks.find((task) => task.id === activeTask);
    const project = task
      ? projects.find((proj) => proj.id === task.projectId)
      : null;

    timerWithProjectId.projectId = project ? project.id : "";
  }
  return timerWithProjectId;
};
