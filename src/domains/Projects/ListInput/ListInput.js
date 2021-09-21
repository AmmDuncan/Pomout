import React, { useContext, useRef, useState } from "react";

import ThemeContext from "@context/ThemeContext";
import ListInputWrapper from "./ListInputWrapper";
import Button, { ButtonPrimary } from "@components/Button/Button";
import { PlusIcon } from "@assets/Icons";
import Input from "./Input";

const ListInput = (props) => {
  const theme = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const { addToItems } = props;
  const inputRef = useRef(null);

  const buttonProps = {
    type: "submit",
    style: { width: "4.8rem", padding: "0", height: "100%" },
    theme: theme,
    title: "Add Project",
  };
  let fill = `${theme.text}cc`;

  let SubmitButton = Button;
  if (value.trim()) {
    SubmitButton = ButtonPrimary;
    fill = "#ffffff";
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addToItems(value.trim());
    setValue("");
    inputRef.current.focus();
  };

  return (
    <ListInputWrapper theme={theme} onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        type="text"
        name="project"
        theme={theme}
        value={value}
        autoComplete="off"
        placeholder={`Enter ${props.subject || "project"} to add...`}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <SubmitButton {...buttonProps}>
        <PlusIcon fill={fill} />
      </SubmitButton>
    </ListInputWrapper>
  );
};

export default ListInput;
