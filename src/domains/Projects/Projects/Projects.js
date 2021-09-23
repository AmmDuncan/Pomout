import React, { useContext, Fragment } from "react";
import { Redirect, useParams } from "react-router-dom";

import ThemeContext from "@context/ThemeContext";

import MainWrapper from "@components/Container/MainWrapper";
import MainHeader from "@components/MainHeader/MainHeader";
import BackButton from "./BackButton";
import ProjectsList from "../ProjectsList/ProjectsList";
import TasksList from "../TasksList/TasksList";

import { useProjects } from "@hooks";
import { Unit } from "../../Settings/SettingsForm/SettingsForm.styles";

const Projects = () => {
  const { projectId } = useParams();
  const theme = useContext(ThemeContext);
  const projects = useProjects();
  let projectName = null;

  try {
    projectName = projectId
      ? projects.find((project) => project.id === projectId).name
      : null;
  } catch {
    return <Redirect to="/projects" />;
  }

  const selectedProjectHeading = (
    <Fragment>
      <BackButton theme={theme} to="/projects" content="Projects" />
      <h1 style={{ textAlign: "left", marginLeft: "1.6rem" }}>
        {projectName}
        <Unit>(project)</Unit>
      </h1>
    </Fragment>
  );

  return (
    <MainWrapper>
      <MainHeader>
        {projectId ? selectedProjectHeading : <h1>Projects</h1>}
      </MainHeader>
      {projectId ? <TasksList projectId={projectId} /> : <ProjectsList />}
    </MainWrapper>
  );
};

export default Projects;
