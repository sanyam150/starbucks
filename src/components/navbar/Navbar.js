import React from "react";
import "./navbar.css";
import { FaLocationDot } from "react-icons/fa6";
import { colors } from "../../globalStyle";
import ActionButton from "../actionButton/ActionButton";

const Navbar = () => {
  const navbarList = ["MENU", "REWARDS", "GIFTS"];
  return (
    <div className="navbar_container">
      <div className="navbar_container_wrapper">
        <div id="navbar_logo_list_wrapper">
          <div id="navbar_logo_container">
            <img
              src="/starbucks.png"
              alt="starBucks_logo"
              id="starbucks_logo"
            />
          </div>
          <div id="navbar_list_container">
            <ul id="list_style">
              {navbarList.map((listItem, index) => {
                return (
                  <li className="list_style_items" key={index}>
                    {listItem}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div id="navbar_useroptions_container">
          <div id="location_container" className="user_options_navbar">
            <div
              style={{
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                margin: "0 5px",
              }}
            >
              <FaLocationDot />
            </div>
            <span
              style={{
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                fontFamily: "system-ui",
              }}
            >
              Find a Store
            </span>
          </div>
          <div className="user_options_navbar">
            <ActionButton
              buttonColor={colors.colorBlack}
              buttonText={"Join now"}
            />
          </div>
          <div className="user_options_navbar">
            <ActionButton
              buttonColor={colors.colorBlack}
              buttonText={"Sign in"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
