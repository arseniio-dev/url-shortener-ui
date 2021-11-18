import React, { useState } from "react";
import FormBuilder from "../../Components/AuthForm/FormBuilder/FormBuilder";

const Auth = () => {
  const [isSubmitted, changeSubmitted] = useState(false);

  const regFields = {
    username: {
      type: "text",
      placeholder: "username",
    },
    email: {
      type: "email",
      placeholder: "Email",
    },
    password: {
      type: "password",
      placeholder: "Password",
    },
  };

  const onRegistrationSubmitHandler = (formBuilderOutput: any) => {
    changeSubmitted((value) => true);
    console.log(formBuilderOutput === regFields);
    console.log(isSubmitted);
  };

  return (
    <FormBuilder
      formFields={regFields}
      onSubmitHandler={(data) => onRegistrationSubmitHandler(data)}
    />
  );
};

export default Auth;
