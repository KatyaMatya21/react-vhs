import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext.js";

const MY_USER_ID = "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54";

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({ isLogged: false  });

  const toggleLoggedIn = useCallback(() => {
    setLoggedIn((currentValue) => {
      return currentValue.isLogged
        ? { isLogged: false  }
        : { isLogged: true, userId: MY_USER_ID };
    });
  }, []);


  return <AuthContext value={{loggedIn, toggleLoggedIn}}>{children}</AuthContext>;
};
