import usePostData from "../../hooks/usePostData";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.css";

function Authentication() {
  const { postData } = usePostData();

  const handleCreationAccount = (account) => {
    postData("http://localhost:3000/users", account).catch((error) => {
      console.error("Error adding order:", error);
    });
  };
  return (
    <>
      <div className="auth-wrapper">
        <SignInForm />
        <SignUpForm onCreateAccount={handleCreationAccount} />
      </div>
    </>
  );
}

export default Authentication;
