import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import MainWrapper from "@components/Container/MainWrapper";
import ThemeContext from "@context/ThemeContext";
import MainHeader from "@components/MainHeader/MainHeader";
import ListWrapper from "../Projects/ListWrapper/ListWrapper";
import CompletedNav from "./CompletedNav/CompletedNav";
import CompletedProjects from "./CompletedList/CompletedProjects";
import CompletedTasks from "./CompletedList/CompletedTasks";
import { useSelector } from "react-redux";

const Completed = (props) => {
  const theme = useContext(ThemeContext);
  const { type } = useParams();
  const projects = useSelector((state) => state.projects);
  let content = null;
  // const [projects, setProjects] = useState([
  //   { name: "Next.js Fundamentals", id: 1, completed: true },
  //   { name: "React with Hooks", id: 10, completed: true },
  // ]);

  const [tasks, setTasks] = useState([
    { name: "Mechanics and strategy", id: 4, completed: true, project: 1 },
    { name: "useEffect", id: 6, completed: true, project: 1 },
    { name: "useState", id: 8, completed: true, project: 1 },
  ]);

  if (type === "projects") {
    content = <CompletedProjects projects={projects} />;
  } else if (type === "tasks") {
    content = <CompletedTasks tasks={tasks} setTasks={setTasks} />;
  }

  return (
    <MainWrapper theme={theme}>
      <MainHeader theme={theme}>
        <h1>Completed</h1>
      </MainHeader>
      <ListWrapper>
        <CompletedNav />
        {content}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Completed;
