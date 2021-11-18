import React, { MouseEventHandler } from "react";
import classes from "./LargeButton.module.scss";

const LargeButton = ({
  children,
  onClick,
  type,
}: {
  children: React.ReactChildren | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button className={classes.LargeButton} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default LargeButton;
