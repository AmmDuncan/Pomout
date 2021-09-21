import React from "react";
import styled from "styled-components";

import { showUp } from "@utility/animations";

const NotFoundWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 16rem;
  padding-bottom: 4rem;
  flex-flow: column;
  animation: ${showUp};

  > .message {
    margin-top: 1.6rem;
  }
`;

const NotFound = (props) => {
  const { illustration, message } = props;
  return (
    <NotFoundWrapper>
      {illustration}
      <section className="message">{message}</section>
    </NotFoundWrapper>
  );
};

export default NotFound;
