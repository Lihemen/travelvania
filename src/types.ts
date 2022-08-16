export type Hotel = {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  image: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
  token: string;
};

export type Review = {
  id: number;
  hotelId: number;
  userId: number;
  rating: number;
};
