import Link from "next/link";
import { IconCart } from "../icons/IconCart.jsx";
import styles from "./CartLink.module.scss";

export const CartLink = () => {
  return (
    <Link href="/cart" className={styles.cartLink}>
      <IconCart />
    </Link>
  );
};
