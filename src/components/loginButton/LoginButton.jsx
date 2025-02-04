import { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext.js";
import { Button } from "../button/button";

export const LoginButton = () => {
  const { loggedIn, toggleLoggedIn } = use(AuthContext);

  return (
    <Button
      text={loggedIn ? "Logout" : "Login"}
      onClick={toggleLoggedIn}
      type={"button"}
    />
  );
};
