import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false); //spiner

  // Function
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
