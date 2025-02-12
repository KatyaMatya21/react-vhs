import { Link } from "react-router";
import { IconCart } from "../icons/IconCart.jsx";
import styles from "./CartLink.module.less";

export const CartLink = () => {
  return (
    <Link to="/cart" className={styles.cartLink}>
      <IconCart />
    </Link>
  );
};
