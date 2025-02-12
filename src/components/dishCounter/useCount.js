import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectAmountByItemId } from "../../redux/entities/cart/slice.js";

export const useCount = (dishId) => {
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectAmountByItemId(state, dishId)) || 0;

  const onDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dishId, dispatch]
  );

  const onIncrement = useCallback(
    () => dispatch(addToCart(dishId)),
    [dishId, dispatch]
  );

  return {
    amount,
    onDecrement,
    onIncrement,
  };
};
