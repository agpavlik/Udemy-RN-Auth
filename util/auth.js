import axios from "axios";

const API_KEY = "AIzaSyBVLEngfkS2iuweJ8pMAJh5xR4LOSYJpu0";

// Send request to the Firebase to create a new user
export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
