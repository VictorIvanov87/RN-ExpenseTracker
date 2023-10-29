import axios from "axios";

const FIREBASE_API_KEY = "AIzaSyCI_m4H9da5sRzFur9ILyD-vx4ri5-HZpI";
const FIREBASE_AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

export const createUser = async (email, password) => {
  const result = await axios.post(`${FIREBASE_AUTH_URL}${FIREBASE_API_KEY}`, {
    email,
    password,
    returnSecureToken: true
  });

  return result;
};
