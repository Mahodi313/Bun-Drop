import FormInput from "../form-input/form.input.component";

import "./sign-up-form.styles.css";

function SignUpForm() {
  const formFields = {
    username: "",
    password: "",
    confirmPassword: "",
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
            value={formFields.username}
          />

          <FormInput
            label="Password"
            type="password"
            required
            name="password"
            value={formFields.password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            value={formFields.confirmPassword}
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
