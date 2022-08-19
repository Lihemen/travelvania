import React from "react";
import { Button } from "../../components/button";

import { useNavigate } from "react-router-dom";

import "./notfound.css";

export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found bm">
      <Button onClick={() => navigate(-1)} text="Go Back" type="button" />
    </div>
  );
};

