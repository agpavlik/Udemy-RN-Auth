import axios from "axios";

const API_KEY = "AIzaSyBVLEngfkS2iuweJ8pMAJh5xR4LOSYJpu0";

// mode is sign up or sign in
async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

// Send request to the Firebase to create a new user
export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

// Log in function
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
