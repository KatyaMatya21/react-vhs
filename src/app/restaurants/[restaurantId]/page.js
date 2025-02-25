import {redirect} from 'next/navigation'

const RestaurantPage = async ({ params }) => {
  const { restaurantId } = await params;
  redirect(`/restaurants/${restaurantId}/menu`);
};

export default RestaurantPage;
