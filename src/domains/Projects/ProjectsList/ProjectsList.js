import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ItemsList from "../ItemsList/ItemsList";
import DrawingOnBoard from "@assets/illustrations/DrawingOnBoard";
import { projectsSlice, addedProject } from "@store";
import { useProjects, useSettings } from "@hooks";

const Projects = () => {
  const projects = useProjects();
  const settings = useSettings();
  const dispatch = useDispatch();
  const history = useHistory();

  const addProject = (project) => {
    if (project) {
      dispatch(addedProject(project, settings));
    }
  };

  const completeProject = (projectId) => {
    dispatch(projectsSlice.actions.toggleComplete(projectId));
  };

  const editProject = (projectId) => {
    history.push(`/projects/${projectId}/details`);
  };

  return (
    <ItemsList
      items={projects}
      addToItems={addProject}
      checkClicked={completeProject}
      editClicked={editProject}
      illustration={<DrawingOnBoard />}
      message="No active projects"
      check
      edit
    />
  );
};

export default Projects;
