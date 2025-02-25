import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav = () => {
  return (
    <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <Link href="/about" title="About">About</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/contacts" title="Contacts">Contacts</Link>
        </li>
    </ul>
  );
};
