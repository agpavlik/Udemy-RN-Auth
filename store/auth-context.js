import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "", // store the tokem
  isAuthenticated: false, // indicates if user logged in or not
  authenticate: (token) => {}, // method for changing the state
  logout: () => {}, // logout method which should clear the authentication status
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken, // convert falsy (0, null, undefined, etc.) to false, otherwise, true.
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
