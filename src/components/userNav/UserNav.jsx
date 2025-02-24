"use client";
import { use } from "react";
import { LoginButton } from "../loginButton/LoginButton.jsx";
import { UserAuthContext } from "../authContext/UserAuthContext.js";
import styles from "./UserNav.module.scss";

export const UserNav = () => {
  const { loggedIn } = use(UserAuthContext);

  return (
    <div className={styles.user}>
      {loggedIn.isLogged && <span>Hi User!</span>}
      <LoginButton/>
    </div>
  );
};
