import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";

import PageHeader from "../../components/page-header";
import { HotelCard } from "../../components/hotel-card";

import safari from "../../assets/images/safari.webp";
import "./style.css";

export default function HotelsList() {
  const navigate = useNavigate();
  const [chain, setChain] = useState("");

  const hotels = useAppSelector((state) => state.hotelReducer);
  const [hotelsList, setHotelsList] = useState(hotels);

  const filter = (chain: string) => {
    setHotelsList(hotels);
    setHotelsList(hotels.filter((hotel) => hotel.name.includes(chain)));
  };

  return (
    <>
      <PageHeader image={safari} name="All Hotels" link="hotels" />

      {hotelsList.length < 1 && (
        <div className="no-hotels">
          <h3>No Hotels Found</h3>
          <Link to="create">Create</Link>
        </div>
      )}
      {hotelsList && (
        <>
          <div className="filter">
            <input
              type="text"
              className="form-input"
              placeholder="Enter chain..."
              value={chain}
              onChange={(e) => setChain(e.target.value)}
            />
            <div className="form-group">
              <button
                className="btn"
                type="submit"
                onClick={() => filter(chain)}
              >
                Filter
              </button>
              <button
                className="btn btn-success"
                type="button"
                onClick={() => navigate("create")}
              >
                Create
              </button>
            </div>
          </div>
          <div className="hotels-grid">
            {hotelsList.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

