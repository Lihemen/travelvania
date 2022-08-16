import React from "react";
import PageHeader from "../../components/page-header";

import SigninForm from "./components/form";

import authImg from "../../assets/images/auth.webp";

export default function Signin() {
  return (
    <>
      <PageHeader name="Sign In" image={authImg} link="sign-in" />

      <SigninForm />
    </>
  );
}

