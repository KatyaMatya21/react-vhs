import { IconPlus } from "../icons/IconPlus.jsx";
import { IconMinus } from "../icons/IconMinus.jsx";
import styles from "./Counter.module.less";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={onDecrement} type="button">
        <IconMinus />
      </button>
      <span className={styles.value}>{count}</span>
      <button className={styles.button} onClick={onIncrement} type="button">
        <IconPlus />
      </button>
    </div>
  );
};
