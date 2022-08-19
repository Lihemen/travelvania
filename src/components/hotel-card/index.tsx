import React from "react";
import "./hotelcard.css";
import { Link } from "react-router-dom";
// import { FaStar, FaStarHalf } from "react-icons/fa";

import { Hotel } from "../../types";

// type StarProps = {
//   rating: number;
// };

export const HotelCard: React.FC<Hotel> = (props) => {
  return (
    <div className="card" key={props.id}>
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-content">
        <span className="card-country">{props.country} </span>
        <h3 className="card-title">{props.name}</h3>
      </div>
      <div className="card-footer">
        <Link to={"/hotels/" + props.id}>view details</Link>
      </div>
    </div>
  );
};

