import { createSlice } from "@reduxjs/toolkit";
// import { tasksSlice } from "@store";

const SOUND = new Audio();

const createTimer = (override = {}) => ({
  started: null,
  play: null,
  elapsed: 0,
  count: 1,
  activeTask: null,
  next: "break",
  remaining: 25 * 60,
  pomodoroLength: 25,
  shortBreakLength: 5,
  longBreakLength: 20,
  longBreakAfter: 3,
  ...override,
});

const initialState = createTimer();

export const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      return { ...state, ...action.payload };
    },

    start: (state, action) => {
      state.started = action.payload.timestamp;
      state.play = setInterval(action.payload.fn, 1000);
      SOUND.src = "";
    },

    updateElapsed: (state, action) => {
      const currentElapsed = Math.floor(
        (action.payload - state.started) / 1000
      );
      state.elapsed = currentElapsed;
      if (state.remaining - currentElapsed <= 0) {
        state.remaining = 0;
        state.elapsed = 0;
      }
      const difference = state.remaining - state.elapsed;
      if (difference === 0) {
        clearInterval(state.play);
        state.play = false;
      }
    },
    pause: (state, action) => {
      state.started = null;
      state.remaining = state.remaining - state.elapsed;
      clearInterval(state.play);
      state.play = false;
      state.elapsed = 0;
    },
    stop: (state, action) => {
      state.started = null;
      state.remaining = state.pomodoroLength * 60;
      clearInterval(state.play);
      state.play = false;
      state.elapsed = 0;
      state.next = "break";
    },
    continue: (state, action) => {
      state.started = action.payload.timestamp;
      state.play = setInterval(action.payload.fn, 1000);
      SOUND.src = "";
    },
    end: (state, action) => {
      state.started = null;
      clearInterval(state.play);
      state.play = false;
      state.elapsed = 0;
      if (state.next === "break") {
        state.next = "pomodoro";
        if (state.count === state.longBreakAfter) {
          state.remaining = state.longBreakLength * 60;
          state.count = 1;
        } else {
          state.remaining = state.shortBreakLength * 60;
          state.count++;
        }
      } else {
        state.remaining = state.pomodoroLength * 60;
        state.next = "break";
      }
    },
    reset: (state, action) => {
      return createTimer();
    },
    playSound: (state, action) => {
      if (action.payload) {
        SOUND.src = action.payload;
      }
      SOUND.play();
    },
    checkActiveTask: (state, action) => {
      const { projectId, tasks, taskId } = action.payload;
      const task = taskId
        ? tasks.find((task) => task.id === taskId)
        : tasks.find((task) => task.projectId === projectId);
      if (!taskId) {
        // if project was deleted
        if (task && task.id === state.activeTask) state.activeTask = null;
      } else {
        // if task was completed
        if (task && !task.completed) state.activeTask = null;
      }
    },
  },
});

// export default timerSlice;
