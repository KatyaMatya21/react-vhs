import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./Dish.jsx";
import { use, useEffect } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { selectDishById, selectGetDishByIdRequestStatus } from "../../redux/entities/dishes/slice.js";
import { getDishById } from "../../redux/entities/dishes/getDishById.js";

export const DishPageContainer = ({ dishId }) => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectGetDishByIdRequestStatus);
  const dish = useSelector((state) => selectDishById(state, dishId));

  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dishId, dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading dish..." />;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  const { name, price, ingredients } = dish || {};
  const { loggedIn } = use(AuthContext);

  if (!dish) {
    return null;
  }

  return (
    <Dish dishId={dishId} name={name} price={price} ingredients={ingredients} showCounter={loggedIn} />
  );
};
