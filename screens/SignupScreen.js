import AuthContent from "../components/Auth/AuthContent";
import { useContext, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false); //spiner

  const authCtx = useContext(AuthContext);

  // Function sign up
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your input and try again later."
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
