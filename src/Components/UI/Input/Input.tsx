import React, { ChangeEventHandler } from "react";
import classes from "./Input.module.scss";

interface InputProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeHolder: string;
  type: string;
  name: string;
  id?: string;
}

const Input = ({
  onChangeHandler,
  value,
  placeHolder,
  type,
  name,
  id,
}: InputProps) => {
  return (
    <div className={classes.Input}>
      <input
        spellCheck="false"
        type={type}
        onChange={onChangeHandler}
        value={value}
        placeholder={placeHolder}
        name={name}
        id={id}
      />
    </div>
  );
};

export default Input;
