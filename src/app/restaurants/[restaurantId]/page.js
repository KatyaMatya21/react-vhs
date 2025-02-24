"use client";
import {redirect} from 'next/navigation'
import {useParams} from "next/navigation";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  redirect(`/restaurants/${restaurantId}/menu`);
};

export default RestaurantPage;
