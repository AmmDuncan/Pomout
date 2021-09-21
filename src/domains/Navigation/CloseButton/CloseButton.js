import React from "react";

import CloseButtonWrapper from "./CloseButtonWrapper";
import { CloseIcon } from "@assets/Icons";
import breakpoints from "@utility/breakpoints";

const CloseButton = (props) => {
  const fill = props.theme.theme === "d" ? props.theme.text : null;

  return (
    <CloseButtonWrapper breakpoint={breakpoints.tablet} {...props}>
      <CloseIcon fill={fill} />
    </CloseButtonWrapper>
  );
};

export default CloseButton;
