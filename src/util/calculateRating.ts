import { Review } from "../types";

export default function calculateRating(reviews: Review[]): number {
  return (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  );
}
