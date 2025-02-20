import { Dish } from "./Dish.jsx";
import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api.js";

export const DishContainer = ({ dishId, restaurantId }) => {
  const { dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
    selectFromResult: ({ data }) => ({
      dish: data?.find((dish) => dish.id === dishId),
    }),
  })

  const { name, price, ingredients } = dish || {};
  const { loggedIn } = use(AuthContext);

  if ( !dish ) {
    return null;
  }

  return (
    <Dish dishId={dishId} name={name} price={price} ingredients={ingredients} showCounter={loggedIn.isLogged} />
  );
};
