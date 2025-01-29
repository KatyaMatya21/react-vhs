import styles from "./nav.module.less";

export const Nav = () => {
  return (
    <ul className={styles.nav}>
        <li className={styles.nav__item}><a href="#">About</a></li>
        <li className={styles.nav__item}><a href="#">Contact</a></li>
        <li className={styles.nav__item}><a href="#">Login</a></li>
    </ul>
  );
};
