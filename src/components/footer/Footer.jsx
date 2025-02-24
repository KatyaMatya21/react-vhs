import { Logo } from "../logo/Logo.jsx";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};
