import { Logo } from "../logo/Logo.jsx";
import { Nav } from "../nav/Nav.jsx";
import styles from "./header.module.less";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="sr-only">Hidden title for screen reader</h1>
      <Logo />
      <Nav />
    </header>
  );
};
