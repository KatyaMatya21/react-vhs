import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext.js";

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = useCallback(() => {
    setLoggedIn((currentValue) => {
      return !currentValue;
    });
  }, []);

  return <AuthContext value={{loggedIn, toggleLoggedIn}}>{children}</AuthContext>;
};
