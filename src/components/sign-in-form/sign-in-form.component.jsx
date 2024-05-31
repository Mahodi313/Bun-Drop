import React, { useState } from "react";
import FormInput from "../form-input/form.input.component";

import "./sign-in-form-styles.css";

function SignInForm() {
  const formFields = {
    username: "",
    password: "",
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your username and password</span>
      <form>
        <FormInput
          label="Username"
          type="text"
          required
          name="username"
          value={formFields.username}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={formFields.password}
        />
        <div className="buttons-container">
          <button className="login-btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
