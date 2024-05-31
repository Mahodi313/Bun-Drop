import { useState } from "react";
import FormInput from "../form-input/form.input.component";

import "./sign-up-form.styles.css";

function SignUpForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    favorites: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required.";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return Promise.resolve(false);
    }
    return fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => {
        const userExists = users.some(
          (user) => user.username === formData.username
        );

        if (userExists) {
          newErrors.username = "Username already exists.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        newErrors.username = "Error checking username availability.";
        setErrors(newErrors);
        return false;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateForm();

    if (isValid) {
      props.onCreateAccount(formData);

      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          {errors.username && <p className="error">{errors.username}</p>}
          <FormInput
            label={"Username"}
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

          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="buttons-container">
            <button className="signUp-btn" type="submit">
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
