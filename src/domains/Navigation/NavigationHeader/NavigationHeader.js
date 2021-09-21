import React, { useContext, useState, useRef, useCallback } from "react";

import ThemeContext from "@context/ThemeContext";
import NavigationHeaderCard from "./NavigationHeaderCard";
import NavigationOpener from "../NavigationOpener/NavigationOpener";
import Modal from "@components/Modal/Modal";
import PopupNavigation from "../PopupNavigation/PopupNavigation";

import breakpoints from "@utility/breakpoints";

const NavigationHeader = (props) => {
  const theme = useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);
  const navOpenerRef = useRef(null);

  // on nav opener click
  const toggleOpen = useCallback(() => {
    setNavOpen(!navOpen);
  }, [navOpen, setNavOpen]);

  // if nav is open show modal
  let modal = null;
  if (navOpen) {
    modal = (
      <Modal
        theme={theme}
        breakpoint={breakpoints.tablet}
        onClick={toggleOpen}
      />
    );
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <NavigationHeaderCard theme={theme}>
        Pomout
        <NavigationOpener ref={navOpenerRef} toggleOpen={toggleOpen} />
      </NavigationHeaderCard>
      {modal}
      <PopupNavigation
        timerPageActive={props.timerPageActive}
        theme={theme}
        isOpen={navOpen}
        close={toggleOpen}
        className={navOpen ? "open" : ""}
        breakpoint={breakpoints.tablet}
        draggable
      />
    </>
  );
};

export default NavigationHeader;
