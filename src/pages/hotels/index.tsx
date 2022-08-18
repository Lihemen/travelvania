import React from "react";

import { useAppSelector } from "../../hooks/useAppDispatch";

import PageHeader from "../../components/page-header";
import safari from "../../assets/images/safari.webp";

export default function HotelsList() {
  const hotels = useAppSelector((state) => state.hotelReducer);

  console.log(hotels);

  return (
    <>
      <PageHeader image={safari} name="All Hotels" link="hotels" />
      <h2>List of Hotels</h2>
    </>
  );
}

