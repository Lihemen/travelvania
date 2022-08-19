import React from "react";
import { useField } from "formik";

type Props = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
};

export const TextArea: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-group">
      <label htmlFor={props.name || props.id} className="input-label">
        {label}{" "}
      </label>
      <textarea className="form-input" {...props} {...field}></textarea>
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

