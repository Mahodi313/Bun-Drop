import { useContext } from "react";

import usePostData from "../../hooks/usePostData";

import { AuthContext } from "../../contexts/auth.context";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.css";

function Authentication() {
  const { postData } = usePostData();
  const { setUser, login } = useContext(AuthContext);

  const handleCreationAccount = (account) => {
    postData("http://localhost:3000/users", account)
      .then((newUser) => {
        if (newUser) {
          localStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
        }
      })
      .catch((error) => {
        console.error("Error adding account:", error);
      });
  };

  const handleSignIn = (username, password) => {
    return login(username, password);
  };

  return (
    <>
      <div className="auth-wrapper">
        <SignInForm onSignIn={handleSignIn} />
        <SignUpForm onCreateAccount={handleCreationAccount} />
      </div>
    </>
  );
}

export default Authentication;
