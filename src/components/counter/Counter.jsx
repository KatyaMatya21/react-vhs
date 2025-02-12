import { Button } from "../button/Button.jsx";
import { IconPlus } from "../icons/IconPlus.jsx";
import { IconMinus } from "../icons/IconMinus.jsx";
import styles from "./Counter.module.less";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <Button onClick={onDecrement} type="button" size="square">
        <IconMinus />
      </Button>
      <span className={styles.value}>{count}</span>
      <Button onClick={onIncrement} type="button" size="square">
        <IconPlus />
      </Button>
    </div>
  );
};
