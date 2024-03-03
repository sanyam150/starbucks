import React, { useEffect, useState } from "react";
import { PiCoffeeDuotone } from "react-icons/pi";
import "./loader.css";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loaderId = setInterval(() => {
      setIsVisible((prevState) => !prevState);
    }, 1000);
    return () => clearInterval(loaderId);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="loader_container"
      style={{
        height: `${window.innerHeight - 36}px`,
        width: `${window.innerWidth - 8}px`,
      }}
    >
      <PiCoffeeDuotone
        style={{ fontSize: "50px", color: "var(--colorGreenStarbucks)" }}
        className={`${isVisible ? "fade_out" : "fade_in"}`}
      />
    </div>
  );
};

export default Loader;
