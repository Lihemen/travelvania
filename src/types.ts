export type Hotel = {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  rating: number;
  chain?: string;
  image: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  token: string;
};

export type Review = {
  id: string;
  hotelId: string;
  name: string;
  email: string;
  rating: number;
  date: Date;
  subject: string;
  text: string;
};

export type HotelChain = {
  name: string;
  hotels?: Hotel[];
};

export interface Auth {
  id: string;
  email: string;
  isAuthenticated: boolean;
  token: string;
  expiry: number;
}

