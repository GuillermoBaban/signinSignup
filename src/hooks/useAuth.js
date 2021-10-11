import { useLocalStorageState } from "./useLocalStorage";
import * as Auth from "../services/auth";

//endpoin like firebase

export const useAuth = () => {
  const [users, setUsers] = useLocalStorageState("users", []);
  return {
    signin: (email, password) => Auth.doSignin(users, email, password),
    signup: (user) => Auth.doSignup(users, setUsers, user),
  };
};
