import * as React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  label: string;
  name: string;
  id: string;
  required?: boolean;
};

export const DateInput: React.FC<Props> = (props) => {
  const [field, meta, { setValue }] = useField(props);
  return (
    <div className="input-group">
      <label htmlFor={props.name || props.id} className="input-label">
        {props.label}
      </label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val: any) => {
          setValue(val);
        }}
        className="form-input"
        required={props.required}
        placeholderText="Select a date"
      />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

