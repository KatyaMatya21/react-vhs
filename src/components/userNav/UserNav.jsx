import { use } from "react";
import { LoginButton } from "../loginButton/LoginButton.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import styles from "./userNav.module.less";

export const UserNav = () => {
  const { loggedIn } = use(AuthContext);

  return (
    <div className={styles.user}>
      {loggedIn && <span>Hi User!</span>}
      <LoginButton/>
    </div>
  );
};
