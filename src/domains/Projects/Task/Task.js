import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import MainWrapper from "@components/Container/MainWrapper";
import MainHeader from "@components/MainHeader/MainHeader";

import * as Styled from "@domains/Settings/Settings/Settings.styles";
import SettingSummary from "@domains/Settings/SettingSummary/SettingSummary";
import SettingsForm from "@domains/Settings/SettingsForm/SettingsForm";
import BackButton from "../Projects/BackButton";
import ThemeContext from "@context/ThemeContext";
import { Unit } from "@domains/Settings/SettingsForm/SettingsForm.styles";
import { tasksSlice } from "@store";
import { useSelector } from "react-redux";

const Task = () => {
  const theme = useContext(ThemeContext);
  const { taskId } = useParams();
  const history = useHistory();

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );
  if (!task) history.goBack();
  const {
    numberOfPomodoros,
    timeSpent,
    name,
    timestamp,
    projectId: pId,
    completed,
    ...settings
  } = task;
  const evaluatedTimeSpent = timeSpent / 60 / 60;

  const backClick = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <MainWrapper>
      <MainHeader>
        <BackButton theme={theme} to="/" onClick={backClick} content="Back" />
        <h1 style={{ textAlign: "left", marginLeft: "1.6rem" }}>
          {task.name}
          <Unit>(task)</Unit>
        </h1>
      </MainHeader>
      <Styled.Container>
        <SettingSummary
          totalHours={evaluatedTimeSpent.toFixed(2)}
          numberOfPomodoros={numberOfPomodoros}
          task={task}
          completed={task.completed}
          completedActionCreator={tasksSlice.actions.toggleComplete}
        />
        <SettingsForm
          dependentHook={settings}
          actionCreator={tasksSlice.actions.saveSetting}
        />
      </Styled.Container>
    </MainWrapper>
  );
};

export default Task;
