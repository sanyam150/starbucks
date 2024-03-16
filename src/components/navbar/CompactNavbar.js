import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./compactNavbar.css";
import ActionButton from "../actionButton/ActionButton";
import { colors } from "../../globalStyle";
import HamburgerButton from "../../components/hamburgerButton/HamburgerButton";

const CompactNavbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavbarExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const sideMenuContainer = document.querySelector(".side_menu_container");
    const navbar_cover = document.querySelector(".navbar_cover_container");
    if (sideMenuContainer) {
      sideMenuContainer.classList.toggle("sideNavbarAnimation");
      navbar_cover.classList.toggle("navbar_cover_shadowEffect");
    }
  }, [isNavbarExpanded]);

  const navbarList = ["Menu", "Rewards", "Gift Cards"];
  return (
    <>
      <div id="compactNavbar_container">
        <div className="compactNavbar_image_wrapper">
          <img src="/starbucks.png" alt="starbucks_image" />
        </div>
        <div className="compactNavbar_button_wrapper">
          <HamburgerButton
            onClick={handleToggle}
            isNavbarOpened={isNavbarExpanded}
          />
        </div>
      </div>
      <div className="side_menu_container">
        <div className="side_menu_container_list_wrapper">
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            {navbarList.map((listItem, index) => {
              return (
                <div key={index}>
                  <li>{listItem}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="side_menu_container_userList_wrapper">
          <div className="side_menu_wrapper_userList">
            <ActionButton
              buttonText="Join now"
              buttonTextColor={colors.colorWhite}
              buttonColor={colors.colorBlack}
            />
            <ActionButton
              buttonText="Sign in"
              buttonTextColor={colors.colorWhite}
              buttonColor={colors.colorBlack}
            />
          </div>
          <div className="side_menu_wrapper_location">
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
                display: "flex",
                alignItems: "center",
                fontFamily: "system-ui",
                fontWeight: 700,
              }}
            >
              Find a Store
            </span>
          </div>
        </div>
      </div>
      <div className="navbar_cover_container"></div>
    </>
  );
};

export default CompactNavbar;
