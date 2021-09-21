import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import ModalWrapper from "./Modal.style";

const portalRoot = document.getElementById("portal-root");

const Modal = (props) => {
  const hookRef = useRef();
  if (!hookRef.current) {
    hookRef.current = document.createElement("div");
  }

  useEffect(() => {
    portalRoot.appendChild(hookRef.current);
    return () => {
      portalRoot.removeChild(hookRef.current);
    };
  }, [hookRef]);

  return createPortal(
    <ModalWrapper {...props}>{props.children}</ModalWrapper>,
    hookRef.current
  );
};

export default Modal;
