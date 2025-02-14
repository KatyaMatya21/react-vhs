import styles from "./ErrorBlock.module.less";
import errorDuckPng from "./error_duck.png";
import errorDuckWebp from "./error_duck.webp";

export const ErrorBlock = ({ text }) => {
  return (
    <div className={styles.error}>
      <p>{text}</p>
      <div className={styles.image}>
        <picture>
          <source srcSet={errorDuckWebp} type="image/webp"/>
          <img src={errorDuckPng} width="300px" height="200px" alt="Duck with knife"/>
        </picture>
      </div>
    </div>
  );
};
