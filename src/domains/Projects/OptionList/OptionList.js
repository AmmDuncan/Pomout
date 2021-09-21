import styled from "styled-components";
import Option from "./Option";
import { CheckIcon, EditIcon, TimerOptionIcon } from "@assets/Icons";

const OptionListWrapper = styled.section`
  right: 0;
  height: 100%;
  position: absolute;
  display: inline-flex;
  align-items: stretch;
  background-image: linear-gradient(
    to left,
    ${(props) =>
      `${props.theme.high_elevation}ff 80%,
          ${props.theme.high_elevation}ee 90%,
          ${props.theme.high_elevation}00`}
  );
`;

const OptionList = ({
  id,
  fill,
  edit,
  play,
  check,
  theme,
  checked,
  completed,
  editClicked,
  checkClicked,
  timerClicked,
}) => {
  const checkOption = (
    <Option
      onClick={(e) => {
        const { check, uncheck2 } = theme.audio;
        const audio = completed ? uncheck2 : check;
        new Audio(audio).play();
        checkClicked(id);
      }}
    >
      <span className={"checkOption"}>
        <CheckIcon fill={checked ? `${theme.text}cc` : fill} />
      </span>
    </Option>
  );

  const editOption = (
    <Option onClick={(e) => editClicked(id)}>
      <EditIcon fill={fill} />
    </Option>
  );

  const timerOption = (
    <Option onClick={(e) => timerClicked(id)}>
      <TimerOptionIcon fill={fill} />
    </Option>
  );

  return (
    <OptionListWrapper theme={theme}>
      {edit && editOption}
      {check && checkOption}
      {play && timerOption}
    </OptionListWrapper>
  );
};

export default OptionList;

/*bin && (
  <Option
    theme={theme}
    onClick={(e) => {
      props.removeItem(item.id);
    }}
  >
    <BinIcon fill={fill} />
  </Option>
)*/
