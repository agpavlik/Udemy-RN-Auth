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

  console.log(response.data);
}

// Send request to the Firebase to create a new user
// export async function createUser(email, password) {
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     }
//   );
// }

// Send request to the Firebase to create a new user
export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

// Log in function
export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
