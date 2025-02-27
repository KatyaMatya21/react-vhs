export const getDishById = async (dishId) => {
  const result = await fetch(
    `http://localhost:3001/api/dish/${dishId}`,
    {
      next: { tags: ["getDishById"] },
      cache: "force-cache",
    }
  );

  return result.json();
};
