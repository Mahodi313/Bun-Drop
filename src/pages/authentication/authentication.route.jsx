import React from "react";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.css";

function Authentication() {
  return (
    <>
      <div className="auth-wrapper">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default Authentication;
