import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { TextInput } from "../../../../components/textinput";
import { Button } from "../../../../components/button";

export default function SignupForm() {
  const signup = () => {
    console.log("submit");
  };
  return (
    <div className="form">
      <Formik
        initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string().required("Password is required"),
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
        })}
        onSubmit={signup}
      >
        <Form>
          <div className="form-group">
            <TextInput
              name="firstName"
              label="First Name"
              id="firstName"
              placeholder="First Name"
            />
            <TextInput
              name="lastName"
              label="Last Name"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <TextInput
            name="email"
            label="Email"
            id="email"
            placeholder="Your Email"
          />
          <TextInput
            name="password"
            label="Password"
            id="password"
            placeholder="Your Password"
          />
          <p>
            <Link to="/auth">Already have an account?</Link>
          </p>
          <Button text="sign up" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}

