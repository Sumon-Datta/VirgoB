import React from "react";
import "./LoadingBar.css";

const LoadingBar = () => {
  return (
    <div
      style={{ background: "rgba(0,0,0,0.5)", zIndex: "999" }}
      className=" vh-100 w-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center"
    >
      <LoadingDot />
    </div>
  );
};

export default LoadingBar;

export const LoadingDot = () => {
  return <span className="loader"></span>;
};
