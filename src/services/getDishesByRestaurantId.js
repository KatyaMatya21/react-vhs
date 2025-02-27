export const getDishesByRestaurantId = async (restaurantId) => {
  const result = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
    {
      next: { tags: ["getDishesByRestaurantId"] },
      cache: "force-cache",
    }
  );

  return result.json();
};
