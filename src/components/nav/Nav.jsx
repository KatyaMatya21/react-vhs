import styles from "./Nav.module.less";
import { Link } from "react-router";

export const Nav = () => {
  return (
    <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <Link to="/about" title="About">About</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/contacts" title="Contacts">Contacts</Link>
        </li>
    </ul>
  );
};
