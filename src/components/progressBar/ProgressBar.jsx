import { UseProgressBar } from "./useProgressBar.js";
import styles from "./progressBar.module.less";

export const ProgressBar = () => {
  const { value} = UseProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{ width: value + '%' }}
    ></div>
  );
};
