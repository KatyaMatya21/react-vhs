import styles from "./button.module.less";

export const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
