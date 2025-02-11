import { useProgressBar } from "./useProgressBar.js";
import styles from "./ProgressBar.module.less";

export const ProgressBar = () => {
  const value = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{ width: value + '%' }}
    />
  );
};
