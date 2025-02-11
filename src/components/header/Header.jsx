import { Logo } from "../logo/Logo.jsx";
import { Nav } from "../nav/Nav.jsx";
import { ToggleThemeButton } from "../toggleThemeButton/ToggleThemeButton.jsx";
import styles from "./Header.module.less";
import {UserNav} from "../userNav/UserNav.jsx";

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className="sr-only">Hidden title for screen reader</h1>
      <Logo/>
      <Nav/>
      <div className={styles.theme}>
        <ToggleThemeButton/>
      </div>
      <UserNav/>
    </header>
);
};
