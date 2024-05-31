import React, { useState } from "react";
import FormInput from "../form-input/form.input.component";

import "./sign-in-form-styles.css";

function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <button className="login-btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
