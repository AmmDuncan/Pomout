import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../utility/LocalStorage";
import { timerSlice } from "@store/timer/timerSlice";

const initialState = {
  pomodoroLength: 25,
  shortBreakLength: 5,
  longBreakLength: 20,
  longBreakAfter: 3,
  timeSpent: 0,
  numberOfPomodoros: 0,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: null,
  reducers: {
    fetchInitial: (state, action) =>
      JSON.parse(LocalStorage.get("settings")) || initialState,
    save: (state, action) => {
      state = action.payload;
      LocalStorage.set("settings", JSON.stringify(state));
      return state;
    },
  },
  extraReducers: {
    [timerSlice.actions.end]: (state, action) => {
      const { next } = action.payload;
      if (next === "break") {
        state.timeSpent += action.payload.pomodoroLength * 60;
        state.numberOfPomodoros += 1;
        LocalStorage.set("settings", JSON.stringify(state));
      }
    },
    [timerSlice.actions.stop]: (state, action) => {
      const { pomodoroLength, remaining, next } = action.payload;
      if (next === "break") {
        state.timeSpent += Math.abs(pomodoroLength * 60 - remaining);
        LocalStorage.set("settings", JSON.stringify(state));
      }
    },
  },
});

export default settingsSlice;
