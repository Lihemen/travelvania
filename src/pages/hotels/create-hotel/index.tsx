import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TextInput } from "../../../components/textinput";
import { Button } from "../../../components/button";
import { Dropdown } from "../../../components/dropdown";
import PageHeader from "../../../components/page-header";
import { TextArea } from "../../../components/text-area";

import { Hotel } from "../../../types";
import { CityLocales, CountryLocales } from "../../../constants";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAuth } from "../../../hooks/useAuth";
import { createHotel } from "../../../store/slices/hotelSlice";

import safari from "../../../assets/images/safari.webp";
import hotelimg from "../../../assets/images/demohotel.webp";

export default function AddHotelForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  const [hotel] = useState<Hotel>({
    id: uuidv4(),
    name: "",
    address: "",
    city: "",
    country: "",
    description: "",
    image: hotelimg,
    rating: 0,
  });

  const create = (values: any) => {
    dispatch(createHotel(values));
    toast.success("Hotel created successfully!");
  };

  useEffect(() => {
    if (!authenticated) {
      navigate("/auth/sign-in");
    }
  });

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
        <Formik
          initialValues={hotel}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            country: Yup.string().required("Country is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values) => {
            create(values);
            navigate("/hotels");
          }}
        >
          <Form>
            <div className="form-group">
              <TextInput
                id="name"
                label="Name"
                name="name"
                placeholder="Hotel Cubana"
              />
              <TextInput
                id="address"
                label="Address"
                name="address"
                placeholder="Neverland"
              />
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
            <TextArea
              name="description"
              id="description"
              label="Description"
              placeholder="Enter description"
            />
            <Button text="CREATE" type="submit" />
          </Form>
        </Formik>
      </div>
    </>
  );
}

