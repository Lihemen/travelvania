import React from "react";
import { Form, Formik } from "formik";
import { DateInput } from "../../../../components/date-input";
import { TextInput } from "../../../../components/textinput";
import { Button } from "../../../../components/button";

export const HotelBooking = ({ id }: any) => {
  return (
    <aside className="hotel-booking">
      <h3>Booking Details</h3>
      <Formik
        initialValues={{ startDate: "", endDate: "", guests: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <DateInput label="start day" name="startDay" id="startDay" />
          <DateInput label="end day" name="endDay" id="endDay" />
          <TextInput
            id="guests"
            label="guests"
            type="number"
            placeholder="0"
            name="guests"
          />
          <Button type="submit" text="CHECK" />
        </Form>
      </Formik>
    </aside>
  );
};

