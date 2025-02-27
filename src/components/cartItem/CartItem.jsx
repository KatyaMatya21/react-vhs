"use client";

import {DishCounter} from "../dishCounter/DishCounter.jsx";
import {useSelector} from "react-redux";
import {selectAmountByItemId} from "../../redux/entities/cart/slice.js";

export const CartItem = ({ dishId, dish }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, dishId));

  return <>
    <div>{dish.name} - <b>{amount}</b></div>
    <DishCounter dishId={dishId} />
  </>
};
