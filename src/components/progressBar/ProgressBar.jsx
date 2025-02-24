import { useProgressBar } from "./useProgressBar.js";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = () => {
  const value = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{ width: value + '%' }}
    />
  );
};
