import React from "react";
import { produce } from "immer";

import * as Styled from "./SettingsForm.styles";
import { SettingCard } from "./SettingCard";
import { useSettingsEffect } from "@hooks";

const SettingsForm = ({ dependentHook, actionCreator }) => {
  const [settings, setSettings] = useSettingsEffect(
    dependentHook,
    actionCreator
  );

  const change = (key) => (event) => {
    setSettings(
      produce(settings, (draftSettings) => {
        draftSettings[key] = parseInt(event.target.value);
      })
    );
  };

  return (
    <div>
      <Styled.Form>
        <SettingCard
          unit={"minutes"}
          value={settings.pomodoroLength}
          onChange={change("pomodoroLength")}
        >
          Pomodoro Length
        </SettingCard>
        <SettingCard
          unit={"minutes"}
          value={settings.shortBreakLength}
          onChange={change("shortBreakLength")}
        >
          Short Break Length
        </SettingCard>
        <SettingCard
          unit={"minutes"}
          value={settings.longBreakLength}
          onChange={change("longBreakLength")}
        >
          Long Break Length
        </SettingCard>
        <SettingCard
          unit={"pomodoros"}
          value={settings.longBreakAfter}
          onChange={change("longBreakAfter")}
        >
          Long Break After
        </SettingCard>
      </Styled.Form>
    </div>
  );
};

export default SettingsForm;
