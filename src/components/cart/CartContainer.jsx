"use client";
import {Cart} from "./cart.jsx";
import {useSelector} from "react-redux";
import {selectCartItemsIds} from "../../redux/entities/cart/slice";

export const CartContainer = ({ dishes }) => {
  const itemsIds = useSelector(selectCartItemsIds);

  if (!itemsIds.length) {
    return null;
  }

  return (
    <Cart itemsIds={itemsIds} dishes={dishes} />
  );
};
