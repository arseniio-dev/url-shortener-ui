import React, { useState } from "react";
import classes from "./RegistrationForm.module.scss";
import Input from "../../UI/Input/Input";
import { registrate } from "../../../API/api";

const RegistrationForm = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onInputChange = (event: { target: { name: any; value: any } }) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(input);
  };

  const OnRegistrationSubmitHandler = () => {
    registrate(input.email, input.username, input.password);
  };

  return (
    <form
      className={classes.RegistrationForm}
      onSubmit={OnRegistrationSubmitHandler}
    >
      <Input
        value={input.username}
        type={"username"}
        placeHolder={"Username"}
        name={"username"}
        onChangeHandler={onInputChange}
      />
      <Input
        value={input.email}
        type={"email"}
        placeHolder={"Email"}
        name={"email"}
        onChangeHandler={onInputChange}
      />
      <Input
        value={input.password}
        type={"password"}
        placeHolder={"Password"}
        name={"password"}
        onChangeHandler={onInputChange}
      />
    </form>
  );
};

export default RegistrationForm;
