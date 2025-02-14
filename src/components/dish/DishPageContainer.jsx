import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./Dish.jsx";
import { use, useEffect } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { selectCurrentDish, selectGetCurrentDishRequestStatus } from "../../redux/entities/currentDish/slice.js";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { getCurrentDish } from "../../redux/entities/currentDish/getCurrentDish.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";

export const DishPageContainer = ({ dishId }) => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectGetCurrentDishRequestStatus);
  const currentDish = useSelector(selectCurrentDish);

  useEffect(() => {
    dispatch(getCurrentDish(dishId));
  }, [dishId, dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading dish..." />;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  const { name, price, ingredients } = currentDish || {};
  const { loggedIn } = use(AuthContext);

  return (
    <Dish dishId={dishId} name={name} price={price} ingredients={ingredients} showCounter={loggedIn} />
  );
};
