import React from "react";
import { useField } from "formik";

import "./textinput.css";

type Props = {
  label: string;
  name: string;
  type?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
};

export const TextInput: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-group">
      <label htmlFor={props.name || props.id} className="form-label">
        {label}
      </label>
      <input
        {...field}
        {...props}
        name={props.name}
        value={field.value}
        autoComplete={props.autoComplete}
        className="input"
      />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

