'use server';
import { revalidatePath } from "next/cache";

export async function addReviewAction({ restaurantId, pathname, review }) {
  const result = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {'Content-Type': 'application/json'},
  });

  const data = await result.json();
  revalidatePath(pathname);
}
