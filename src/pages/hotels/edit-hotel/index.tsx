import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import PageHeader from "../../../components/page-header";
import { TextInput } from "../../../components/textinput";
import { Button } from "../../../components/button";
import { Dropdown } from "../../../components/dropdown";
import { TextArea } from "../../../components/text-area";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { updateHotel } from "../../../store/slices/hotelSlice";

import { CityLocales, CountryLocales } from "../../../constants";

import safari from "../../../assets/images/safari.webp";

export const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const hotels = useAppSelector((state) => state.hotelReducer);

  const hotelToEdit = hotels.find((el) => el.id === id);

  return (
    <>
      <PageHeader
        name="Edit Hotel"
        link={`hotels/edit/${id}`}
        image={safari}
        parent_link="hotels"
      />

      <div className="form">
        <h2>Edit Hotel Details</h2>

        <Formik
          initialValues={{ ...hotelToEdit }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            country: Yup.string().required("Country is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values) => {
            dispatch(updateHotel(values));
            toast.success("Update Successful");
            setTimeout(() => navigate(`/hotels/${id}`), 1500);
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
                defaultValue={hotelToEdit?.city || "Choose City"}
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
            <Button text="UPDATE" type="submit" />
          </Form>
        </Formik>
      </div>
    </>
  );
};

