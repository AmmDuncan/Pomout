import { configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from "./projects/projectsSlice";
import { tasksSlice } from "./tasks/tasksSlice";
import { settingsSlice } from "./settings/settingsSlice";
import { timerSlice } from "./timer/timerSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    projects: projectsSlice.reducer,
    settings: settingsSlice.reducer,
    timer: timerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.fn"],
      },
    }),
});

export { timerSlice } from "./timer/timerSlice";
export { projectsSlice, addedProject } from "./projects/projectsSlice";
export { tasksSlice } from "./tasks/tasksSlice";
export { settingsSlice } from "./settings/settingsSlice";
export default store;
