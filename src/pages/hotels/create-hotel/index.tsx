import React, { useState } from "react";
import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TextInput } from "../../../components/textinput";
import { Button } from "../../../components/button";
import { Dropdown } from "../../../components/dropdown";
import PageHeader from "../../../components/page-header";

import { Hotel } from "../../../types";
import { CityLocales, CountryLocales } from "../../../constants";

import { useAppDispatch } from "../../../hooks/useAppSelector";
import { createHotel } from "../../../store/slices/hotelSlice";

import safari from "../../../assets/images/safari.webp";
import hotelimg from "../../../assets/images/demohotel.webp";

export default function AddHotelForm() {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [hotel] = useState<Hotel>({
    id: uuidv4(),
    name: "",
    address: "",
    city: "",
    country: "",
    image: hotelimg,
    rating: 0,
  });

  const create = (values: Hotel) => {
    dispatch(createHotel(values));
    toast.success("Hotel created successfully!");
  };

  return (
    <>
      <PageHeader
        name="Create New Hotel"
        link="hotels/create"
        image={safari}
        parent_link="hotels"
      />

      <div className="form">
        <h2>Create New Hotel</h2>
        <Formik initialValues={hotel} onSubmit={create}>
          <Form>
            <div className="form-group">
              <TextInput id="name" label="Name" name="name" />
              <TextInput id="address" label="Address" name="address" />
            </div>
            <div className="form-group">
              <Dropdown
                name="city"
                options={CityLocales}
                defaultValue="Choose City"
                label="City"
                id="city"
              />
              <Dropdown
                name="country"
                options={CountryLocales}
                defaultValue="Choose Country"
                label="Country"
                id="country"
              />
            </div>
            <div className="form-group"></div>
            <Button text="Create" type="submit" />
          </Form>
        </Formik>
      </div>
    </>
  );
}

