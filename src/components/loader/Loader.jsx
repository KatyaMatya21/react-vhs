import styles from "./Loader.module.scss";

export const Loader = ({ text }) => {
  return (
    <div className={styles.loader}>
      <span className="sr-only">{text}</span>
    </div>
  );
};
