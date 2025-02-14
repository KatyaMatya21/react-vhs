import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./Menu.jsx";
import { selectDishesIds, selectGetDishesRequestStatus } from "../../redux/entities/dishes/slice.js";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dishes/getDishes.js";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";

export const MenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectGetDishesRequestStatus);
  const dishesIds = useSelector(selectDishesIds);

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId, dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading menu..." />;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  return (
    <Menu menuIds={dishesIds} />
  );
};
