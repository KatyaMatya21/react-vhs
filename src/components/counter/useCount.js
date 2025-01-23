import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState({ value: 0 });

  const onDecrement = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        value: prevState.value === 0 ? 0 : prevState.value - 1,
      };
    });
  };

  const onIncrement = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        value: prevState.value === 5 ? 5 : prevState.value + 1,
      };
    });
  };

  return {
    count: count.value,
    onDecrement,
    onIncrement,
  };
};
