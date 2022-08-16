import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { TextInput } from "../../../../components/textinput";
import { Button } from "../../../../components/button";
import { Checkbox } from "../../../../components/checkbox";

export default function SigninForm() {
  const login = () => {
    // change to redux action
    console.log("login");
  };
  return (
    <div className="form">
      <Formik
        initialValues={{ email: "", password: "" }} // change to redux state
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
        })}
        onSubmit={login}
      >
        <Form>
          <TextInput
            name="email"
            label="Email"
            id="email"
            placeholder="Your Email"
            type="email"
          />
          <TextInput
            name="password"
            label="Password"
            id="password"
            placeholder="Your Password"
            type="password"
          />

          <div className="d-flex-justify-content">
            <Checkbox
              name="remember"
              required
              label="Remember me"
              type="checkbox"
            />
            <Link to="forgot-password">Forgot Password?</Link>
          </div>
          <p>
            <Link to="sign-up">Don't have an account?</Link>
          </p>
          <Button text="sign in" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}

