import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

// import { useAppDispatch } from "../../../../hooks/useAppDispatch";

import { Button } from "../../../../components/button";
import { TextArea } from "../../../../components/text-area";
import { TextInput } from "../../../../components/textinput";

import "./style.css";

export const WriteReview = (props: { hotelId: string }) => {
  const review = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <h3>Write a Review</h3>
      <div className="review-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            rating: 0,
            text: "",
            hotelId: props.hotelId,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            rating: Yup.number().required("Rating is required"),
            text: Yup.string().required("Text is required"),
            subject: Yup.string().required("Subject is required"),
          })}
          onSubmit={review}
        >
          <Form>
            <div className="form-group">
              <TextInput
                name="name"
                label=""
                type="text"
                id="name"
                placeholder="Name"
                autoComplete="name"
              />
              <TextInput
                name="email"
                label=""
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <TextInput
                name="phone"
                label=""
                type="tel"
                id="phone"
                placeholder="Phone"
              />
              <TextInput
                name="subject"
                label=""
                type="text"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <TextArea id="text" name="text" label="" placeholder="Message" />

            <Button
              text="Leave a Review"
              type="submit"
              className="btn-success btn-small"
            />
          </Form>
        </Formik>
      </div>
    </>
  );
};

