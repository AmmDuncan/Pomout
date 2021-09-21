import React, { useContext, memo } from "react";
import { useSelector } from "react-redux";

import ThemeContext from "@context/ThemeContext";

import SidebarCard from "./SidebarCard";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import NavigationList from "../NavigationList/NavigationList";
import NightmodeSwitch from "../NightmodeSwitch/NightmodeSwitch";
import MiniTimerInfo from "../../Timer/Timer/MiniTimerInfo/MiniTimerInfo";
import ScrollableContainer from "@components/Container/ScrollableContainer";
import Time, { MiniTimeWrapper } from "../../Timer/Timer/Time/Time";
import { Link } from "react-router-dom";
import { useActiveTaskAndProject } from "@hooks";

const Sidebar = (props) => {
  const theme = useContext(ThemeContext);
  const activeTask = useSelector((state) => state.timer.activeTask);
  let { task, project } = useActiveTaskAndProject(activeTask);

  return (
    <SidebarCard mid elevate={true} theme={theme}>
      <ScrollableContainer
        style={{
          margin: "0",
          width: "100%",
          padding: "0",
          justifyContent: "space-between",
        }}
      >
        <section>
          <NavigationHeader timerPageActive={props.timerPageActive} />
          <Link to={"/"} style={{ textDecoration: "none", color: theme.text }}>
            <MiniTimerInfo
              hide={props.timerPageActive}
              theme={theme}
              style={{ marginTop: ".8rem", border: "none" }}
              inSidebar={true}
            >
              {activeTask ? (
                <>
                  <section className="task">{task.name}</section>
                  <section className="project">{project.name}</section>
                </>
              ) : (
                <section style={{ marginLeft: "1.6rem" }}>
                  No active task
                </section>
              )}
              <Time wrapper={MiniTimeWrapper} />
            </MiniTimerInfo>
          </Link>
          <NavigationList hide={true} style={{ marginTop: ".8rem" }} />
        </section>
        <section>
          <NightmodeSwitch hide={true} style={{ marginTop: ".8rem" }} />
        </section>
      </ScrollableContainer>
    </SidebarCard>
  );
};

export default memo(Sidebar);
