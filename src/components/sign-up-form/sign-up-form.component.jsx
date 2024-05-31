import { useState } from "react";
import FormInput from "../form-input/form.input.component";

import "./sign-up-form.styles.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {" "}
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form>
          <FormInput
            label={"Username"}
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

          <FormInput
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="buttons-container">
            <button className="signUp-btn" type="submit">
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
