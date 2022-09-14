import React from "react";
import "./style.css";

const Loading = ({ color }) => {
  return (
    <svg viewBox="25 25 50 50">
      <circle
        className={color ? color : "white"}
        cx="50"
        cy="50"
        r="20"
      ></circle>
    </svg>
  );
};

export default Loading;
