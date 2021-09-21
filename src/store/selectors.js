import { createSelector } from "@reduxjs/toolkit";

export const selectProjects = (state) => state.projects;
export const selectTasks = (state) => state.tasks;
export const selectStarted = (state) => state.timer.started;
