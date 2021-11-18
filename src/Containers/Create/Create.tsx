import React, { useState } from "react";
import { createUrl } from "../../API/api";
import { validateUrlHelper } from "../../lib/formValidator";
import classes from "./Create.module.scss";

const Create = () => {
  const [input, setInput] = useState("");
  const [scheme, setScheme] = useState("");

  const onCreateSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    createUrl(`${scheme}${input}`);
    setInput("");
    setScheme("");
  };

  const validateInput = (event: { target: { value: string } }) => {
    /** ----- LIVE FORM VALIDATOR ------
         reactively helps to validate url input
         by adding https:// scheme on begging
         if user dont add it, also can change
         scheme protocol if user using
         non-https protocol
         -------------------------------- */
    const value = event.target.value;

    const separationResult = validateUrlHelper(scheme, value);
    setInput(separationResult.url);
    setScheme(separationResult.scheme);
  };

  return (
    <div className={classes.Create}>
      <form action="" onSubmit={onCreateSubmitHandler}>
        <div className={classes.Create__input_form}>
          <div className={classes.Create__input_scheme}>{scheme}</div>

          <input
            spellCheck="false"
            type="text"
            onChange={validateInput}
            value={input}
            placeholder="enter link"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
