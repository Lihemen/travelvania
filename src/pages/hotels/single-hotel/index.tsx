import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/useAppSelector";
import { useTitle } from "../../../hooks/useTitle";

import PageHeader from "../../../components/page-header";

import { HotelOverview } from "../components/hotel-overview";
import { HotelBooking } from "../components/hotel-booking";

import safari from "../../../assets/images/safari.webp";
import "./singlehotel.css";

const SingleHotel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hotels = useAppSelector((state) => state.hotelReducer);

  const hotel = hotels.find((hotel) => hotel.id === id);

  useTitle(hotel?.name || "Hotel Detail");

  useEffect(() => {
    if (!hotel) {
      navigate("/hotels");
    }
  }, [hotel, navigate]);
  return (
    <>
      <PageHeader
        name="Hotel Detail"
        parent_link="hotels"
        link={`hotels/${id}`}
        image={safari}
      />

      {hotel && (
        <section className="single-hotel">
          <HotelOverview hotel={hotel} />
          <HotelBooking id={id} />
        </section>
      )}
    </>
  );
};

export default SingleHotel;

