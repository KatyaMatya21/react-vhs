import { use } from "react";
import { Logo } from "../logo/Logo.jsx";
import { Nav } from "../nav/Nav.jsx";
import { ToggleThemeButton } from "../toggleThemeButton/ToggleThemeButton.jsx";
import { LoginButton } from "../loginButton/LoginButton.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import styles from "./header.module.less";

export const Header = () => {
  const { loggedIn } = use(AuthContext);

  return (
    <header className={styles.header}>
      <h1 className="sr-only">Hidden title for screen reader</h1>
      <Logo/>
      <Nav/>
      <div className={styles.theme}>
        <ToggleThemeButton/>
      </div>
      <div className={styles.user}>
        {loggedIn && <span>Hi User!</span>}
        <LoginButton/>
      </div>
    </header>
);
};
