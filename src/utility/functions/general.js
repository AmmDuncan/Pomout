import pop from "@assets/sounds/pop.mp3";
import uncheck1 from "@assets/sounds/uncheck_1.mp3";
import uncheck2 from "@assets/sounds/uncheck_2.mp3";

const CHECK = new Audio(pop);
const UNCHECK1 = new Audio(uncheck1);
const UNCHECK2 = new Audio(uncheck2);

export const getIdAndAudio = (payload) => {
  // if payload types is object, it includes audio
  let id = payload;
  let audio = {};
  audio.check = CHECK;
  audio.uncheck1 = UNCHECK1;
  audio.uncheck2 = UNCHECK2;

  return { id, audio };
};

export const paddNumber = (num) => {
  return num.toString().padStart(2, "0");
};

export const convertTime = (time) => {
  let minutes = paddNumber(Math.floor(time / 60));
  let seconds = paddNumber(Math.floor(time - minutes * 60));
  return { minutes, seconds };
};
