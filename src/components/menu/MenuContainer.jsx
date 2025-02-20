import { Menu } from "./Menu.jsx";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api.js";

export const MenuContainer = ({ restaurantId }) => {
  const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Loader text="Loading dishes..." />;
  }

  if (isError) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!data?.length) {
    return null;
  }

  const menuIds = data.map((item) => item.id);

  return (
    <Menu menuIds={menuIds} restaurantId={restaurantId} />
  );
};
