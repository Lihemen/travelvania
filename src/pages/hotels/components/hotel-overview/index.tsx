import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../../../hooks/useAuth";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";

import { Map } from "../../../../components/map";
import { Button } from "../../../../components/button";
import { ReviewCard } from "../../../../components/review";

import { deleteHotel } from "../../../../store/slices/hotelSlice";
import { Hotel } from "../../../../types";
import { WriteReview } from "../write-review";

type Props = {
  hotel?: Hotel;
};

export const HotelOverview: React.FC<Props> = ({ hotel }) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const reviews = useAppSelector((state) => state.reviewReducer);

  const hotelReviews = reviews.filter((review) => review.hotelId === hotel?.id);

  return (
    <div className="hotel-details">
      <p className="hotel-location">
        {hotel?.city} - {hotel?.country}
      </p>
      <h1 className="hotel-name">{hotel?.name}</h1>
      <div className="hotel-image">
        <img src={hotel?.image} alt={hotel?.name} />
      </div>
      {authenticated && (
        <div className="action-buttons">
          <Button
            text="EDIT"
            type="button"
            className="btn-success"
            onClick={() => navigate(`/hotels/edit/${hotel?.id}`)}
          />
          <Button
            text="DELETE"
            type="button"
            className="btn-danger"
            onClick={() => {
              dispatch(deleteHotel(hotel?.id));
              toast.success("Hotel deleted");
              setTimeout(() => {
                navigate("/hotels");
              }, 2000);
            }}
          />
        </div>
      )}
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
      {hotelReviews.length > 0 && (
        <>
          <h3>Reviews</h3>
          <div className="reviews">
            {hotelReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </>
      )}
      <WriteReview hotelId={hotel?.id ?? ""} />
    </div>
  );
};

