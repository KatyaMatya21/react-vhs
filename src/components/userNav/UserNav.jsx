import { use } from "react";
import { LoginButton } from "../loginButton/LoginButton.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import styles from "./UserNav.module.less";

export const UserNav = () => {
  const { loggedIn } = use(AuthContext);

  return (
    <div className={styles.user}>
      {loggedIn.isLogged && <span>Hi User!</span>}
      <LoginButton/>
    </div>
  );
};
