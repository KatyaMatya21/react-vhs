"use client";
import { Dish } from "./Dish.jsx";
import { use } from "react";
import { UserAuthContext } from "../authContext/UserAuthContext.js";
import { useGetDishByIdQuery } from "../../redux/services/api/api.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";

export const DishPageContainer = ({ dishId }) => {
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader text="Loading dish..." />;
  }

  if (isError) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!data) {
    return null;
  }

  const { name, price, ingredients } = data || {};
  const { loggedIn } = use(UserAuthContext);

  return (
    <Dish dishId={dishId} name={name} price={price} ingredients={ingredients} showCounter={loggedIn.isLogged} />
  );
};
