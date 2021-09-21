import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SettingSummaryWrapper,
  Value,
  SummaryUnit,
  SummaryButton,
  SummaryButtonRed,
} from "./SettingSummary.styles";

import { TimerIcon } from "@assets/Icons";
import ThemeContext from "@context/ThemeContext";
import Modal from "@components/Modal/Modal";
import DeleteConfirmation from "./DeleteConfirmation/DeleteConfirmation";
import { BinIcon } from "../../../assets/Icons";
import { timerSlice, projectsSlice, tasksSlice } from "@store";
import { useHistory } from "react-router-dom";
import { LocalStorage } from "../../../utility/LocalStorage";
// import { tasksSlice } from "../../../store/tasks/tasksSlice";

const SettingSummary = ({
  totalHours,
  numberOfPomodoros,
  completed,
  task,
  project,
  settings,
  completedActionCreator,
}) => {
  const theme = useContext(ThemeContext);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const history = useHistory();
  const timerActiveTask = useSelector((state) => state.timer.activeTask);
  const [modalOpen, setModalOpen] = useState(false);
  const { reset, set, start, updateElapsed, checkActiveTask } =
    timerSlice.actions;
  const { check, uncheck2 } = theme.audio;

  const id = task ? task.id : project ? project.id : null;

  const currentTask = useSelector((state) => state.tasks).find(
    (task) => task.id === id
  );

  const toggleComplete = () => {
    const audio = completed ? uncheck2 : check;
    new Audio(audio).play();
    dispatch(
      checkActiveTask({
        projectId: task ? null : id,
        tasks,
        taskId: task ? id : false,
      })
    );
    dispatch(completedActionCreator(id));
  };

  const completedStyle = {
    opacity: "0",
    maxHeight: "0",
    overflow: "hidden",
  };

  const startClicked = () => {
    const playInfo = () => ({
      timestamp: new Date().getTime(),
      fn: () => dispatch(updateElapsed(new Date().getTime())),
    });
    const {
      id: activeTask,
      pomodoroLength,
      shortBreakLength,
      longBreakLength,
      longBreakAfter,
    } = currentTask;
    if (activeTask !== timerActiveTask) {
      dispatch(reset());
      dispatch(
        set({
          activeTask,
          pomodoroLength,
          shortBreakLength,
          longBreakLength,
          longBreakAfter,
          remaining: pomodoroLength * 60,
        })
      );
      dispatch(start(playInfo()));
      history.push("/");
    } else {
      dispatch(timerSlice.actions.continue(playInfo()));
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openDeleteConfirmation = () => {
    setModalOpen(true);
  };

  const deleteProject = () => {
    setTimeout(() => dispatch(projectsSlice.actions.delete(id)), 10);
    dispatch(tasksSlice.actions.deletedProject(id));
    dispatch(checkActiveTask({ projectId: id, tasks }));
    history.goBack();
  };

  const clearData = () => {
    LocalStorage.clear();
  };

  return (
    <SettingSummaryWrapper>
      {modalOpen && (
        <Modal breakpoint={"(max-width: 100000px)"}>
          {settings ? (
            <DeleteConfirmation
              clear
              closed={closeModal}
              clearData={clearData}
            />
          ) : (
            <DeleteConfirmation
              id={id}
              closed={closeModal}
              deleteProject={deleteProject}
            />
          )}
        </Modal>
      )}
      <section>
        <section>
          Total active time: <Value>{totalHours}</Value>
          <SummaryUnit>hours</SummaryUnit>
        </section>
        <section>
          Pomodoros done: <Value>{numberOfPomodoros}</Value>
        </section>
        {task || project ? (
          <section>
            Status:{" "}
            <label htmlFor={"completed"} style={{ cursor: "pointer" }}>
              <input
                type={"checkbox"}
                checked={completed}
                onChange={toggleComplete}
                id={"completed"}
                style={{ transform: "scale(1.25)" }}
              />
              <Value>{completed ? "Completed" : "Active"}</Value>
            </label>
          </section>
        ) : null}
      </section>
      {task && (
        <SummaryButton
          onClick={startClicked}
          style={{
            transition: ".2s ease-out",
            ...(completed ? completedStyle : {}),
          }}
        >
          <TimerIcon
            fill={"#fff"}
            style={{
              marginRight: ".4rem",
              display: "inline-block",
              aspectRatio: "1/1",
            }}
          />{" "}
          Start
        </SummaryButton>
      )}
      {project && (
        <SummaryButtonRed
          onClick={openDeleteConfirmation}
          style={{
            transition: ".2s ease-out",
            color: theme.background,
            fontSize: "1.4rem",
            fontWeight: "500",
          }}
        >
          <BinIcon
            fill="#fff"
            style={{
              display: "inline-block",
              aspectRatio: "1/1",
            }}
          />{" "}
        </SummaryButtonRed>
      )}
      {settings && (
        <SummaryButtonRed
          onClick={openDeleteConfirmation}
          style={{
            transition: ".2s ease-out",
            color: "#fff",
            fontSize: "1.4rem",
          }}
        >
          Clear Data
        </SummaryButtonRed>
      )}
    </SettingSummaryWrapper>
  );
};

export default SettingSummary;
