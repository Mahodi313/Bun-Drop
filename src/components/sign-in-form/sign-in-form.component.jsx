import React, { useState } from "react";
import FormInput from "../form-input/form.input.component";

import "./sign-in-form-styles.css";

function SignInForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required.";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      props
        .onSignIn(formData.username, formData.password)
        .then(() => {
          setFormData({
            username: "",
            password: "",
          });
        })
        .catch((error) => {
          console.error("Error signing in:", error);
          setErrors({ form: "Invalid username or password" });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your username and password</span>
      <form onSubmit={handleSubmit}>
        {errors.form && <p className="error">{errors.form}</p>}
        {errors.username && <p className="error">{errors.username}</p>}
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <button className="login-btn" type="submit">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
