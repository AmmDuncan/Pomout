import { createSlice, createAction, nanoid } from "@reduxjs/toolkit";
import { descendingOrderSortFn } from "@utility/functions/sort";
import { LocalStorage } from "../../utility/LocalStorage";
import { projectsSlice } from "@store/projects/projectsSlice";
import { timerSlice } from "@store/timer/timerSlice";

// console.log("timerSlice", timerSlice);
// console.log("projectsSlice", projectsSlice);

const createTask = (name, override = {}) => ({
  name,
  id: nanoid(9),
  projectId: null,
  timestamp: new Date().getTime(),
  completed: false,
  pomodoroLength: 25,
  shortBreakLength: 5,
  longBreakLength: 20,
  longBreakAfter: 3,
  timeSpent: 0, // stored in seconds
  numberOfPomodoros: 0,
  ...override,
});

const initialState = [
  // createTask("Redux Fundamentals", { projectId: "front", id: "red" }),
];

export const addedTask = createAction("tasks/add", (name, project) => {
  const {
    id: projectId,
    pomodoroLength,
    shortBreakLength,
    longBreakLength,
    longBreakAfter,
  } = project;
  return {
    payload: createTask(name, {
      projectId,
      pomodoroLength,
      shortBreakLength,
      longBreakLength,
      longBreakAfter,
    }),
  };
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: null,
  reducers: {
    fetchInitial: () => {
      try {
        return (JSON.parse(LocalStorage.get("tasks")) || initialState).sort(
          descendingOrderSortFn
        );
      } catch {
        LocalStorage.remove("tasks");
        return [];
      }
    },

    add: (state, action) => {
      state.unshift(action.payload);
      LocalStorage.set("tasks", JSON.stringify(state));
    },

    deletedProject: (state, action) => {
      const newState = state.filter(
        (task) => task.projectId !== action.payload
      );
      LocalStorage.set("tasks", JSON.stringify(newState));
      return newState;
    },

    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      task.completed = !task.completed;
      LocalStorage.set("tasks", JSON.stringify(state));
    },

    saveSetting: (state, action) => {
      const { id, ...settings } = action.payload;
      const newState = state.map((task) =>
        task.id === id ? { ...task, ...settings } : task
      );
      LocalStorage.set("tasks", JSON.stringify(newState));
      return newState;
    },
  },
  extraReducers: {
    [projectsSlice.actions.delete]: (state, action) => {
      const newState = state.filter(
        (task) => task.projectId !== action.payload
      );
      LocalStorage.set("tasks", JSON.stringify(newState));
      return newState;
    },
    [timerSlice.actions.end]: (state, action) => {
      const { activeTask, next, pomodoroLength } = action.payload;
      const task = state.find((task) => task.id === activeTask);
      if (next === "break" && task) {
        task.timeSpent += pomodoroLength * 60;
        task.numberOfPomodoros += 1;
        LocalStorage.set("tasks", JSON.stringify(state));
      }
    },
    [timerSlice.actions.stop]: (state, action) => {
      const { activeTask, next, pomodoroLength, remaining } = action.payload;
      const task = state.find((task) => task.id === activeTask);
      if (next === "break" && task) {
        task.timeSpent += pomodoroLength * 60 - remaining;
      }
      LocalStorage.set("tasks", JSON.stringify(state));
    },
  },
});

// export default tasksSlice;
