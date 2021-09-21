import React, { useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import LayoutTemplate from "./Layout.style.js";
import Sidebar from "@domains/Navigation/Sidebar/Sidebar";
import Projects from "@domains/Projects/Projects/Projects";
import Completed from "@domains/Completed/Completed";
import Settings from "@domains/Settings/Settings/Settings";
import Task from "@domains/Projects/Task/Task";
import Project from "@domains/Projects/Project/Project";
import TimerContainer from "../../domains/Timer/TimerContainer/TimerContainer";

const Layout = () => {
  const location = useLocation();
  const [timerPageActive, setTimerPageActive] = useState(
    location.pathname === "/"
  );

  return (
    <LayoutTemplate>
      <aside className="sidebarContainer">
        <Sidebar timerPageActive={timerPageActive}>Something</Sidebar>
      </aside>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <TimerContainer setTimerPageActive={setTimerPageActive} />
          </Route>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:projectId" component={Projects} />
          <Route
            exact
            path="/projects/:projectId/details"
            component={Project}
          />
          <Route exact path="/projects/:projectId/:taskId" component={Task} />
          <Route exact path="/completed">
            <Redirect to="/completed/projects" />
          </Route>
          <Route exact path="/completed/:type" component={Completed} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </main>
    </LayoutTemplate>
  );
};

export default Layout;
