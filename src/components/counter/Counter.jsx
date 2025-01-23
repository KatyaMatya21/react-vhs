import { useCount } from "./useCount";

export const Counter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <>
      <button onClick={onDecrement}>-</button>
      <span style={{margin: "0 10px"}}>{count}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
};
