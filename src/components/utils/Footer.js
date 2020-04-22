import React from "react";
import linkedin from "./linkedin.svg";

const Footer = () => {
  return (
    <div className="text-center foot-ce">
      Atul Singh{" "}
      <a href={"https://www.linkedin.com/in/atul-singh-464265128/"} target="blank">
        <img src={linkedin} alt="linkedin logo" />
      </a>
    </div>
  );
};

export default Footer;
