import { Logo } from "../logo/Logo.jsx";
import styles from "./footer.module.less";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};
