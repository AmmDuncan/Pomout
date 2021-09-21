import React from "react";
import { useProjects } from "@hooks";
import { DeleteConfirmationWrapper } from "./DeleteConfirmation.styles";
import Button from "@components/Button/Button";
import { SummaryButtonRed } from "../SettingSummary.styles";

const DeleteConfirmation = (props) => {
  const { deleteProject, closed, clear, clearData } = props;
  const project = useProjects().find((project) => project.id === props.id);

  const deleteOrClear = clear ? (
    <SummaryButtonRed onClick={clearData}>Clear</SummaryButtonRed>
  ) : (
    <SummaryButtonRed onClick={deleteProject}>Delete</SummaryButtonRed>
  );

  return (
    <DeleteConfirmationWrapper>
      <h3>{clear ? "Clear Data" : "Delete Project"}</h3>
      {clear ? (
        <p>
          Are you sure you want to clear all your saved data? Your active timer
          will be reset as well.
        </p>
      ) : (
        <p>
          Are you sure you want to delete
          <strong>"{project ? project.name : null}"</strong> and all related
          tasks?
        </p>
      )}
      <div className={"ctas"}>
        <Button onClick={closed}>Cancel</Button>
        {deleteOrClear}
      </div>
    </DeleteConfirmationWrapper>
  );
};

export default DeleteConfirmation;
