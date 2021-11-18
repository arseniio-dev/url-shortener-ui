import React, { MouseEventHandler } from "react";
import classes from "./Backdrop.module.scss";

interface backDropProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Backdrop = ({ onClick }: backDropProps) => {
  return <div className={classes.Backdrop} onClick={onClick} />;
};

export default Backdrop;
