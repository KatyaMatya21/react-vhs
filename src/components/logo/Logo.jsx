import styles from "./Logo.module.less";
import logo from "./duck.svg";
import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo} title="Home">
      <img src={logo} width="50px" height="50px" alt="Logo"/>
    </Link>
  );
};
