import React, { useContext, useEffect, useMemo } from "react";

import ThemeContext from "@context/ThemeContext";

import TimerContainerStyle from "../TimerContainer/TimerContainer.style";
import TimerWrapper from "./TimerWrapper";
import Time from "./Time/Time";

import MiniTimerInfo from "./MiniTimerInfo/MiniTimerInfo";
import TimerControls from "./TimerControls/TimerControls";
import { useActiveTaskAndProject } from "@hooks";

const miniTimerStyle = {
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0 1.6rem",
};

const Timer = (props) => {
  const {
    setTimerPageActive,
    started,
    remaining,
    elapsed,
    play,
    current,
    activeTask,
    playSound,
  } = props;
  const theme = useContext(ThemeContext);
  const audio = useMemo(() => theme.audio.done, [theme]);
  const [timerStarted, setTimerStarted] = React.useState(false);
  let { task, project } = useActiveTaskAndProject(activeTask);

  const timeRemaining = remaining - elapsed;

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimerStarted(false);
    }
  }, [timeRemaining]);

  const controlProps = {
    play,
    audio,
    started,
    current,
    playSound,
    timerStarted,
    timeRemaining,
    setTimerStarted,
    ...props,
  };
  useEffect(() => {
    setTimerPageActive(true);
    return () => setTimerPageActive(false);
  }, [setTimerPageActive]);

  return (
    <TimerContainerStyle>
      <MiniTimerInfo
        removeHeight={"420px"}
        theme={theme}
        style={miniTimerStyle}
      >
        {activeTask ? (
          <>
            <section className="task" style={{ width: "100%" }}>
              {task.name}
            </section>
            <section className="project" style={{ width: "100%" }}>
              {project.name}
            </section>
          </>
        ) : (
          <section style={{ textAlign: "center" }}>No active task</section>
        )}
      </MiniTimerInfo>
      <TimerWrapper theme={theme} break={current === "break"}>
        <Time />
        <TimerControls {...controlProps} />
      </TimerWrapper>
    </TimerContainerStyle>
  );
};

export default Timer;
