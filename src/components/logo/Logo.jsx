import styles from "./Logo.module.scss";
import logo from "./duck.svg";
import Link from "next/link";
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo} title="Home">
      <Image src={logo} width={50} height={50} alt="Logo" priority />
    </Link>
  );
};
