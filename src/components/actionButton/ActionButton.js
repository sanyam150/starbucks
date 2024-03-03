import React from "react";
import "./actionButton.css";
import PropTypes from "prop-types";

const ActionButton = ({
  buttonColor,
  buttonTextColor,
  buttonText,
  buttonBorder,
  buttonFontFamily,
}) => {
  return (
    <div id="action_button_container">
      <button
        style={{
          backgroundColor: buttonColor,
          color: buttonTextColor,
          border: `1px solid ${buttonBorder}`,
        }}
        className="action_button_wrapper"
      >
        <span style={{ fontFamily: buttonFontFamily }}>{buttonText}</span>
      </button>
    </div>
  );
};

ActionButton.propTypes = {
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonFontFamily: PropTypes.string,
};

ActionButton.defaultProps = {
  buttonColor: "var(--colorGreenAccent)",
  buttonTextColor: "var(--colorWhite)",
  buttonBorder: "var(--colorBlack)",
  buttonText: "Action Button",
  buttonFontFamily: "Helvetica",
};

export default ActionButton;
