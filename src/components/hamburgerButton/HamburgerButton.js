import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./hamburgerButton.css";

const HamburgerButton = ({ onClick, isNavbarOpened }) => {
  const handleClick = () => {
    onClick();
    const hamburgerContainer = document.querySelector(
      ".hamburger_button_container"
    );
    if (hamburgerContainer)
      hamburgerContainer.classList.add("hamburgerButtonClickedOnce");
  };

  const toggleTranslateClassesToElement = (container, classes, delay) => {
    setTimeout(() => {
      container.forEach((element, index) => {
        element.classList.toggle(classes[index]);
      });
    }, delay);
  };

  const toggleRotateClassesToElement = (container, classes, delay) => {
    setTimeout(() => {
      container.forEach((element, index) => {
        switch (index) {
          case 0:
            element.classList.toggle(classes[index]);
            break;
          case 2:
            element.classList.toggle(classes[index - 1]);
            break;
          default:
            break;
        }
      });
    }, delay);
  };

  useEffect(() => {
    const hamburgerContainer = document.querySelector(
      ".hamburger_button_container"
    );
    const hamburgerElements = document.querySelectorAll(".line");
    if (
      isNavbarOpened &&
      hamburgerContainer.classList.contains("hamburgerButtonClickedOnce")
    ) {
      toggleTranslateClassesToElement(
        hamburgerElements,
        [
          "openNavbarTranslateUp",
          "openNavbarDisplayNone",
          "openNavbarTranslateYDown",
        ],
        0
      );
      toggleRotateClassesToElement(
        hamburgerElements,
        ["openNavbarRotationclockWise", "openNavbarRotationAnticlockWise"],
        100
      );
    } else if (
      !isNavbarOpened &&
      hamburgerContainer.classList.contains("hamburgerButtonClickedOnce")
    ) {
      toggleRotateClassesToElement(
        hamburgerElements,
        ["openNavbarRotationclockWise", "openNavbarRotationAnticlockWise"],
        0
      );
      toggleTranslateClassesToElement(
        hamburgerElements,
        [
          "openNavbarTranslateUp",
          "openNavbarDisplayNone",
          "openNavbarTranslateYDown",
        ],
        100
      );
    }
  }, [isNavbarOpened]);

  return (
    <div className={`hamburger_button_container`} onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

HamburgerButton.propTypes = {
  isNavbarOpened: PropTypes.bool,
};

HamburgerButton.defaultProps = {
  isNavbarOpened: false,
};

export default HamburgerButton;
