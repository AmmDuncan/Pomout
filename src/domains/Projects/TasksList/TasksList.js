import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ItemsList from "../ItemsList/ItemsList";
import PapersOnBoard from "@assets/illustrations/PapersOnBoard";
import { addedTask } from "@store/tasks/tasksSlice";
import { useProjects, useTasks } from "@hooks";
import { tasksSlice, timerSlice } from "@store";

const TasksList = ({ projectId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const timerActiveTask = useSelector((state) => state.timer.activeTask);
  const projects = useProjects();
  const [tasks, relatedTasks] = useTasks(projectId);
  const { reset, set, start, updateElapsed } = timerSlice.actions;
  const { checkActiveTask } = timerSlice.actions;
  const task = timerActiveTask
    ? tasks.find((task) => task.id === timerActiveTask)
    : null;

  const project = projects.find((project) => project.id === projectId);

  const addTask = (task) => {
    if (task) {
      dispatch(addedTask(task, project));
    }
  };

  const completeTask = (taskId) => {
    dispatch(
      checkActiveTask({
        tasks,
        taskId: task ? task.id : false,
      })
    );
    dispatch(tasksSlice.actions.toggleComplete(taskId));
  };

  const startTimer = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    const playInfo = () => ({
      timestamp: new Date().getTime(),
      fn: () => dispatch(updateElapsed(new Date().getTime())),
    });
    const {
      id: activeTask,
      pomodoroLength,
      shortBreakLength,
      longBreakLength,
      longBreakAfter,
    } = task;
    if (activeTask !== timerActiveTask) {
      dispatch(reset());
      dispatch(
        set({
          activeTask,
          pomodoroLength,
          shortBreakLength,
          longBreakLength,
          longBreakAfter,
          remaining: pomodoroLength * 60,
        })
      );
      dispatch(
        start({
          timestamp: new Date().getTime(),
          fn: () => dispatch(updateElapsed(new Date().getTime())),
        })
      );
      history.push("/");
    } else {
      dispatch(
        timerSlice.actions.continue({
          timestamp: new Date().getTime(),
          fn: () => dispatch(updateElapsed(new Date().getTime())),
        })
      );
    }
  };

  return (
    <ItemsList
      items={relatedTasks}
      addToItems={addTask}
      checkClicked={completeTask}
      timerClicked={startTimer}
      illustration={<PapersOnBoard />}
      message="No active tasks"
      subject="task"
      check
      play
      showOptions
    />
  );
};

export default TasksList;
