import { useProgressBar } from "./useProgressBar.js";
import styles from "./progressBar.module.less";

export const ProgressBar = () => {
  const value = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{ width: value + '%' }}
    />
  );
};
