import React, { useCallback } from "react";
import Button, { ButtonPrimary } from "@components/Button/Button";
import { useSelector } from "react-redux";
import {
  useProjects,
  useTasks,
  useTimerWithProjectId,
} from "../../../../hooks";

const TimerControls = (props) => {
  const {
    started,
    theme,
    timerStarted,
    setTimerStarted,
    updateElapsed,
    current,
    //actions
    start,
    pause,
    playSound,
  } = props;

  const timerWithProjectId = useTimerWithProjectId();

  const onStartClick = useCallback(() => {
    start({
      timestamp: new Date().getTime(),
      fn: () => updateElapsed(new Date().getTime()),
    });
    playSound();
    !timerStarted && setTimerStarted(true);
  }, [start, timerStarted, setTimerStarted, updateElapsed, playSound]);

  const onPauseClick = useCallback(() => {
    pause();
    if (!timerStarted) {
      setTimerStarted(true);
    }
  }, [pause]);

  const onContinueClick = useCallback(() => {
    props.continue({
      timestamp: new Date().getTime(),
      fn: () => updateElapsed(new Date().getTime()),
    });
  }, [updateElapsed, props]);

  const onStopClick = useCallback(() => {
    props.stop(timerWithProjectId);
    setTimerStarted(false);
  }, [props]);

  return (
    <section className="ctas">
      {!started && !timerStarted ? (
        <ButtonPrimary theme={theme} onClick={onStartClick}>
          Start
        </ButtonPrimary>
      ) : !started && timerStarted ? (
        <>
          <ButtonPrimary
            theme={theme}
            onClick={onContinueClick}
            style={{ marginRight: "1.2rem" }}
          >
            Continue
          </ButtonPrimary>
          <Button onClick={onStopClick}>Stop</Button>
        </>
      ) : current === "break" ? (
        <Button onClick={onStopClick}>Stop</Button>
      ) : (
        <Button onClick={onPauseClick}>Pause</Button>
      )}
    </section>
  );
};

export default TimerControls;
