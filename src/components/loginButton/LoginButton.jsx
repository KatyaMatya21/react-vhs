"use client";
import { use } from "react";
import { UserAuthContext } from "../authContext/UserAuthContext.js";
import { CustomButton } from "../button/CustomButton.jsx";

export const LoginButton = () => {
  const { loggedIn, toggleLoggedIn } = use(UserAuthContext);

  return (
    <CustomButton
      onClick={toggleLoggedIn}
      type={"button"}
    >
      {loggedIn.isLogged ? "Logout" : "Login"}
    </CustomButton>
  );
};
