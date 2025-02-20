import { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext.js";
import { Button } from "../button/button";

export const LoginButton = () => {
  const { loggedIn, toggleLoggedIn } = use(AuthContext);

  return (
    <Button
      onClick={toggleLoggedIn}
      type={"button"}
    >
      {loggedIn.isLogged ? "Logout" : "Login"}
    </Button>
  );
};
