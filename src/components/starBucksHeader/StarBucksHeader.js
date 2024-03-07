import React from "react";
import "./starBucksHeader.css";
import PropTypes from "prop-types";

const StarBucksHeader = ({ textHeader }) => {
  return (
    <div className="starBucksHeaderContainer">
      <div className="starBucksHeaderWrapper">
        {textHeader ? (
          <span>{textHeader}</span>
        ) : (
          <span>
            STARBUCKS<sup style={{ fontSize: "8px" }}>@</sup> REWARDS
          </span>
        )}
      </div>
    </div>
  );
};

StarBucksHeader.propTypes = {
  colorHeader: PropTypes.string,
  textHeader: PropTypes.string,
};

export default StarBucksHeader;
