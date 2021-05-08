import React from "react";
import FrontImg from "../images/main.jpeg";
import "./ChatIntro.css";

export default () => {
  return (
    <div className="chatIntro">
      <img src={FrontImg} alt="" />
      <h1>Keep Your Phone Connected</h1>
      <h2>
        Chat-connect connects to your phone to sync messages. To reduce
        data-usage connect your phone to wifi.
      </h2>
    </div>
  );
};
