import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Timer from "../Timer/Timer";
import { timerSlice } from "@store";

const mapStateToProps = (state) => {
  return {
    started: state.timer.started,
    play: state.timer.play,
    remaining: state.timer.remaining,
    activeTask: state.timer.activeTask,
    elapsed: state.timer.elapsed,
    sound: state.timer.sound,
    current: state.timer.next === "break" ? "pomodoro" : "break",
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(timerSlice.actions, dispatch);
};

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);
export default TimerContainer;
