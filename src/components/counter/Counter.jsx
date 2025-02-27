import {CustomButton} from "../button/CustomButton.jsx";
import {IconPlus} from "../icons/IconPlus.jsx";
import {IconMinus} from "../icons/IconMinus.jsx";
import styles from "./Counter.module.scss";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <CustomButton onClick={onDecrement} type="button" size="square">
        <IconMinus />
      </CustomButton>
      <span className={styles.value}>{count}</span>
      <CustomButton onClick={onIncrement} type="button" size="square">
        <IconPlus />
      </CustomButton>
    </div>
  );
};
