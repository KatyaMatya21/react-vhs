import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice.js";
import { CartItem } from "./CartItem.jsx";
import { useGetDishByIdQuery } from "../../redux/services/api/api.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";

export const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  if (isLoading) {
    return <Loader text="Loading dish..." />;
  }

  if (isError) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!data) {
    return null;
  }

   return <CartItem dishId={id} amount={amount} dishName={data.name}/>;
};
