import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TextInput } from "../../../../components/textinput";
import { Button } from "../../../../components/button";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { registerUser } from "../../../../store/slices/userSlice";

export default function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signup = (values: any) => {
    dispatch(registerUser(values));

    toast.success("User created");

    setTimeout(() => navigate("/auth/sign-in"), 2000);
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
              type="text"
              autoComplete="given-name"
              placeholder="First Name"
            />
            <TextInput
              name="lastName"
              label="Last Name"
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Last Name"
            />
          </div>
          <TextInput
            name="email"
            label="Email"
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Your Email"
          />
          <TextInput
            name="password"
            label="Password"
            id="password"
            type="password"
            placeholder="Your Password"
          />
          <p>
            <Link to="/auth/sign-in">Already have an account?</Link>
          </p>
          <Button text="sign up" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}

