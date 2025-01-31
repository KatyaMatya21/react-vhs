import styles from "./logo.module.less";
import logo from "./duck.svg";

export const Logo = () => {
  return (
    <a className={styles.logo} href="#">
      <img src={logo} width="50px" height="50px" alt="Logo"/>
    </a>
  );
};
