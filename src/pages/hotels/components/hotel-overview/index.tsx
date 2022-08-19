import React from "react";
import { Hotel } from "../../../../types";
import { Map } from "../../../../components/map";
import { FaCheck, FaTimes } from "react-icons/fa";

type Props = {
  hotel?: Hotel;
};

export const HotelOverview: React.FC<Props> = ({ hotel }) => {
  return (
    <div className="hotel-details">
      <p className="hotel-location">
        {hotel?.city} - {hotel?.country}
      </p>
      <h1 className="hotel-name">{hotel?.name}</h1>
      <div className="hotel-image">
        <img src={hotel?.image} alt={hotel?.name} />
      </div>
      <h3>Hotel Overview</h3>
      <p>{hotel?.description} </p>

      <div className="map-container">
        <h3>INCLUDE/EXCLUDE</h3>
        <div className="exclusion-list">
          <ul>
            <li>
              <FaCheck className="check" />
              Pick and Drop Services
            </li>
            <li>
              <FaCheck className="check" />
              Complimentary Breakfast
            </li>
            <li>
              <FaCheck className="check" />
              Wi-Fi &amp; Laundry
            </li>
            <li>
              <FaCheck className="check" />
              24-7 Pool Services
            </li>
          </ul>
          <ul>
            <li>
              <FaTimes className="not" /> Free Cancellation
            </li>
            <li>
              <FaTimes className="not" /> Food &amp; Drinks
            </li>
            <li>
              <FaTimes className="not" /> Massage &amp; Spa
            </li>
            <li>
              <FaTimes className="not" /> Insurance
            </li>
          </ul>
        </div>
      </div>

      <h3>Hotel Location</h3>
      <div className="map-container">
        <Map address={hotel?.address || ""} />
      </div>
      <h3>Reviews</h3>
      <div className="reviews"></div>
    </div>
  );
};

