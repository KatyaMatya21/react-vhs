import { useCount } from "../counter/useCount";
import { Counter } from "../counter/Counter";

export const DishCounter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <>
      <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
    </>
  );
};
