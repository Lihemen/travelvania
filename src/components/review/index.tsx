import React from "react";

import { Review } from "../../types";

import user1 from "../../assets/images/user1.webp";

export const ReviewCard: React.FC<Review> = (props) => {
  return (
    <div className="review">
      <div className="image-container">
        <img src={user1} alt={props.name} />
        <div className="review-name">
          <h3>{props.name}</h3>
          <p className="review-date">
            {props.date.toLocaleDateString("en", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <h3>{props.subject}</h3>
      <p>Rating -: To implement stars</p>
      <p>{props.text} </p>
    </div>
  );
};

