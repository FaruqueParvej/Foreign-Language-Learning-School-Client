import { useContext } from "react";
import { AuthContext } from "../Layout/AuthProviders/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
