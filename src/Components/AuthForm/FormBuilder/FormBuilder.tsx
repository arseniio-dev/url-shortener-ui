import React, { ChangeEvent, useState } from "react";
import Input from "../../UI/Input/Input";
import LargeButton from "../../UI/LargeButton/LargeButton";

interface IFormField {
  type: string;
  placeholder: string;
}

interface TFormMetadataField extends IFormField {
  value: string;
}

interface IFormOutputProps {
  [key: string]: TFormMetadataField;
}

type TFormFields = Record<string, IFormField>;

interface IProps {
  buttonText: string;
  formFields: TFormFields;
  onSubmitHandler: (data: IFormOutputProps) => void;
}

const FormBuilder = ({
  formFields,
  onSubmitHandler,
  buttonText,
}: IProps): JSX.Element => {
  const createFormObject = (formFields: TFormFields): IFormOutputProps => {
    return Object.fromEntries(
      Object.entries(formFields).map(
        ([key, value]): [[string], TFormMetadataField] => {
          return [[key], { ...value, value: "" }];
        }
      )
    );
  };

  const [formData, setFormData] = useState(createFormObject(formFields));

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const changeValue = (obj: IFormOutputProps, key: string, value: string) => {
      const res = { ...obj };
      res[key].value = value;
      return res;
    };

    setFormData(changeValue(formData, event.target.name, event.target.value));
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmitHandler(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      {Object.keys(formFields).map((key) => {
        return (
          <Input
            key={key}
            type={formData[key].type}
            name={key}
            onChangeHandler={onInputChange}
            placeHolder={formData[key].placeholder}
            value={formData[key].value}
          />
        );
      })}
      <LargeButton type={"submit"}>{buttonText}</LargeButton>
    </form>
  );
};

export default FormBuilder;
