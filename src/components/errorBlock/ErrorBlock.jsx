import styles from "./ErrorBlock.module.scss";
import Image from 'next/image';
import errorDuckPng from "./error_duck.png";

export const ErrorBlock = ({ text }) => {
  return (
    <div className={styles.error}>
      <p>{text}</p>
      <div className={styles.image}>
        <Image src={errorDuckPng} width={300} height={200} alt="Duck with knife" priority />
      </div>
    </div>
  );
};
