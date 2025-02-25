"use client";
import { useCount } from "./useCount.js";
import { Counter } from "../counter/Counter";

export const DishCounter = ( { dishId }) => {
  const { amount, onDecrement, onIncrement } = useCount(dishId);

  return (
    <Counter count={amount} onDecrement={onDecrement} onIncrement={onIncrement} />
  );
};
