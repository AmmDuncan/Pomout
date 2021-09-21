import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import MainWrapper from "@components/Container/MainWrapper";
import MainHeader from "@components/MainHeader/MainHeader";

import * as Styled from "@domains/Settings/Settings/Settings.styles";
import SettingSummary from "@domains/Settings/SettingSummary/SettingSummary";
import SettingsForm from "@domains/Settings/SettingsForm/SettingsForm";
import { Unit } from "@domains/Settings/SettingsForm/SettingsForm.styles";
import { projectsSlice } from "@store";
import BackButton from "../Projects/BackButton";
import ThemeContext from "@context/ThemeContext";
import { useSelector } from "react-redux";

const Project = () => {
  const theme = useContext(ThemeContext);
  const { projectId } = useParams();
  const history = useHistory();
  const project = useSelector((state) =>
    state.projects.find((project) => project.id === projectId)
  );
  if (!project) {
    history.push("/projects");
  }
  const {
    timeSpent,
    numberOfPomodoros,
    name,
    timestamp,
    projectId: pId,
    completed,
    ...settings
  } = project;
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
          {project.name}
          <Unit>(project)</Unit>
        </h1>
      </MainHeader>
      <Styled.Container>
        <SettingSummary
          totalHours={evaluatedTimeSpent.toFixed(2)}
          numberOfPomodoros={numberOfPomodoros}
          project={project}
          completed={project.completed}
          completedActionCreator={projectsSlice.actions.toggleComplete}
        />
        <SettingsForm
          dependentHook={settings}
          actionCreator={projectsSlice.actions.saveSetting}
        />
      </Styled.Container>
    </MainWrapper>
  );
};

export default Project;
