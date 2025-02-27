"use client";
import {Dish} from "./Dish.jsx";
import {use} from "react";
import {UserAuthContext} from "../authContext/UserAuthContext.js";

export const DishContainer = ({ dish }) => {
  const { name, price, ingredients, id } = dish || {};
  const { loggedIn } = use(UserAuthContext);

  if ( !dish ) {
    return null;
  }

  return (
    <Dish dishId={id} name={name} price={price} ingredients={ingredients} showCounter={loggedIn.isLogged} />
  );
};
