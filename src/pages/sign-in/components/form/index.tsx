import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TextInput } from "../../../../components/textinput";
import { Button } from "../../../../components/button";
import { Checkbox } from "../../../../components/checkbox";

import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { login } from "../../../../store/slices/authSlice";

export default function SigninForm() {
  const navigate = useNavigate();

  const users = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const loginUser = (values: any): void => {
    const user = users.find((el) => el.email === values.email);

    if (!user) {
      toast.error("Invalid email or password");
    }
    dispatch(login(user));

    toast.success("Login success");

    setTimeout(() => navigate("/hotels"), 2000);
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
        onSubmit={loginUser}
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
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
          <p>
            <Link to="/auth/sign-up">Don't have an account?</Link>
          </p>
          <Button text="sign in" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}

