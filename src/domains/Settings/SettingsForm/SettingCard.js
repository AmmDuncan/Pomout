import React from "react";
import {
  SettingCard as SettingCardWrapper,
  Label,
  Input,
  Unit,
} from "./SettingsForm.styles";

export const SettingCard = ({ children, unit, value, onChange }) => {
  return (
    <SettingCardWrapper>
      <Label>{children}</Label>
      <div>
        <Input value={value} onChange={onChange} type="number" min="1" />
        <Unit>{unit}</Unit>
      </div>
    </SettingCardWrapper>
  );
};
