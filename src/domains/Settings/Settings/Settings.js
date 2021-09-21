import React from "react";
import MainWrapper from "@components/Container/MainWrapper";
import MainHeader from "@components/MainHeader/MainHeader";

import * as Styled from "./Settings.styles";
import SettingsForm from "../SettingsForm/SettingsForm";
import SettingSummary from "../SettingSummary/SettingSummary";
import { useSettings } from "@hooks";
import settingsSlice from "@store/settings/settingsSlice";

const Settings = () => {
  const settings = useSettings();
  const { timeSpent, numberOfPomodoros } = settings;
  const evaluatedTimeSpent = timeSpent / 60 / 60;

  return (
    <MainWrapper>
      <MainHeader>
        <h1>Settings</h1>
      </MainHeader>
      <Styled.Container>
        <SettingSummary
          settings
          totalHours={evaluatedTimeSpent.toFixed(2)}
          numberOfPomodoros={numberOfPomodoros}
        />
        <SettingsForm
          dependentHook={useSettings()}
          actionCreator={settingsSlice.actions.save}
        />
      </Styled.Container>
    </MainWrapper>
  );
};

export default Settings;
