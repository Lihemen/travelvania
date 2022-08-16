import React from "react";

import PageHeader from "../../components/page-header";
import SignupForm from "./components/form";

import authImg from "../../assets/images/auth.webp";

export default function Signup() {
  return (
    <>
      <PageHeader name="Sign Up" image={authImg} link="/sign-up" />

      <SignupForm />
    </>
  );
}

