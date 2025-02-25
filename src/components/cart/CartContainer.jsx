"use client";
import { Cart } from "./Cart.jsx";
import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/entities/cart/slice";

export const CartContainer = () => {
  const itemsIds = useSelector(selectCartItemsIds);

  if (!itemsIds.length) {
    return null;
  }

  return (
    <Cart itemsIds={itemsIds} />
  );
};
