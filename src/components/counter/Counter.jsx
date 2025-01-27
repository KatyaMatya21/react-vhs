export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <>
      <button onClick={onDecrement} type="button">-</button>
      <span style={{margin: "0 10px"}}>{count}</span>
      <button onClick={onIncrement} type="button">+</button>
    </>
  );
};
