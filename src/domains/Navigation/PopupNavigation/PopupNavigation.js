import React, { useContext } from "react";

import ThemeContext from "@context/ThemeContext";
import PopupNavigationWrapper from "./PopupNavigationWrapper";
import NavigationList from "../NavigationList/NavigationList";
import NightmodeSwitch from "../NightmodeSwitch/NightmodeSwitch";
import ScrollableContainer from "../../../components/Container/ScrollableContainer";
import CloseButton from "../CloseButton/CloseButton";
import MiniTimerInfo from "../../Timer/Timer/MiniTimerInfo/MiniTimerInfo";
import { useSelector } from "react-redux";
import Time, { MiniTimeWrapper } from "../../Timer/Timer/Time/Time";
import { useActiveTaskAndProject } from "@hooks";
import { Link } from "react-router-dom";

const style = {
  marginTop: "3vw",
  marginBottom: "3vw",
  paddingBottom: "8rem",
  borderBox: "content-box",
  // justifyContent: "space-between",
  height: "calc(90% - 10vw)",
};

const PopupNavigation = (props) => {
  const theme = useContext(ThemeContext);
  const activeTask = useSelector((state) => state.timer.activeTask);
  let { task, project } = useActiveTaskAndProject(activeTask);

  return (
    <PopupNavigationWrapper theme={theme} {...props}>
      <ScrollableContainer style={style}>
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: theme.text }}
          onClick={props.close}
        >
          <MiniTimerInfo
            hide={props.timerPageActive}
            theme={theme}
            style={{
              marginBottom: ".8rem",
              border: "none",
              maxWidth: "100%",
            }}
          >
            {activeTask ? (
              <>
                <section className="task">{task.name}</section>
                <section className="project">{project.name}</section>
              </>
            ) : (
              <section style={{ marginLeft: "1.6rem" }}>No active task</section>
            )}
            <Time wrapper={MiniTimeWrapper} />
          </MiniTimerInfo>
        </Link>

        <NavigationList style={{ marginTop: "0" }} onClick={props.close} />
        <NightmodeSwitch />
      </ScrollableContainer>
      <CloseButton
        theme={theme}
        className={!props.isOpen ? "close" : ""}
        onClick={props.close}
      />
    </PopupNavigationWrapper>
  );
};

export default PopupNavigation;
