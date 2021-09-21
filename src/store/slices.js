import { createSlice, createAction, nanoid } from "@reduxjs/toolkit";
import { descendingOrderSortFn } from "@utility/functions/sort";
import { LocalStorage } from "@utility/LocalStorage";
import { timerSlice } from "@store";
import { tasksSlice } from "@store";

const createProject = (name, override = {}) => ({
  name,
  timestamp: new Date().getTime(),
  id: nanoid(6),
  completed: false,
  pomodoroLength: 25,
  shortBreakLength: 5,
  longBreakLength: 20,
  longBreakAfter: 3,
  timeSpent: 0,
  numberOfPomodoros: 0,
  tasks: [],
  ...override,
});

const initialState = [
  // createProject("Frontend Masters", { id: "front" }),
  // createProject("Good with Words - Coursera"),
  // createProject("Data Structures and Algorithms - Coursera"),
  // createProject("Web App & Software Architecture - Educative"),
  // createProject("Design"),
];

export const addedProject = createAction(
  "projects/add",
  (name, override = {}) => {
    return { payload: createProject(name, override) };
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState: null,
  reducers: {
    fetchInitial: (state, action) => {
      return (JSON.parse(LocalStorage.get("projects")) || initialState).sort(
        descendingOrderSortFn
      );
    },
    add: (state, action) => {
      state.unshift(action.payload);
      LocalStorage.set("projects", JSON.stringify(state));
    },
    delete: (state, action) => {
      const newState = state.filter((project) => project.id !== action.payload);
      LocalStorage.set("projects", JSON.stringify(newState));
      return newState;
    },
    toggleComplete: (state, action) => {
      const project = state.find((project) => project.id === action.payload);
      project.completed = !project.completed;
      LocalStorage.set("projects", JSON.stringify(state));
    },
    saveSetting: (state, action) => {
      const { id, ...settings } = action.payload;
      const newState = state.map((project) =>
        project.id === id ? { ...project, ...settings } : project
      );
      LocalStorage.set("projects", JSON.stringify(newState));
      return newState;
    },
  },
  extraReducers: {
    [tasksSlice.actions.add]: (state, action) => {
      const project = state.find(
        (project) => project.id === action.payload.projectId
      );
      project.tasks.push(action.payload.id);
      LocalStorage.set("projects", JSON.stringify(state));
    },
    [timerSlice.actions.end]: (state, action) => {
      const { activeTask, pomodoroLength } = action.payload;
      const project = state.find((project) =>
        project.tasks.includes(activeTask)
      );
      project.timeSpent += pomodoroLength * 60;
      project.numberOfPomodoros += 1;
      LocalStorage.set("projects", JSON.stringify(state));
    },
    [timerSlice.actions.stop]: (state, action) => {
      const { activeTask, next, pomodoroLength, remaining } = action.payload;
      const project = state.find((project) =>
        project.tasks.includes(activeTask)
      );
      if (next === "break" && project) {
        project.timeSpent += pomodoroLength * 60 - remaining;
      }
      LocalStorage.set("tasks", JSON.stringify(state));
    },
  },
});

// export default projectsSlice;
