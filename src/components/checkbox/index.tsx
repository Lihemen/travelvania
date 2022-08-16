import * as React from "react";
import { useField } from "formik";
import "./checkbox.css";

type Props = {
  label: React.ReactNode;
  type: string;
  name: string;
  required?: boolean;
};

export const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {label}
      </label>
      {meta.touched && meta.error ? (
        <span className="bg-danger">{meta.error}</span>
      ) : null}
    </>
  );
};

