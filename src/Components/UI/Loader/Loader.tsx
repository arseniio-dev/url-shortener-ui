import React from "react";
import "./Loader.scss";

const Loader = () => {
  console.log("FALLBACK");
  return (
    <React.Fragment>
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </React.Fragment>
  );
};

export default Loader;
