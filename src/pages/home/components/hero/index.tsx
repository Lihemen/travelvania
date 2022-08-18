import React from "react";
import { Formik, Form } from "formik";

import { DateInput } from "../../../../components/date-input";
import { Button } from "../../../../components/button";
import { Dropdown } from "../../../../components/dropdown";

import { CityLocales } from "../../../../constants";

import "./hero.css";

export const Hero = () => {
  const search = () => {
    console.log("searching...");
  };
  return (
    <section className="hero bm">
      <p className="tagline">Find your perfect hotel</p>
      <h1 className="title">WHERE TO GO TO NEXT?</h1>
      <Formik
        initialValues={{ startDay: "", endDay: "", location: "" }}
        onSubmit={search}
      >
        <Form className="reservation-checker">
          <DateInput id="startDay" label="START DAY" name="startDay" />
          <DateInput id="endDay" label="END DAY" name="endDay" />
          <Dropdown
            label="Location"
            id="location"
            name="location"
            defaultValue="Choose a location"
            options={CityLocales}
          />
          <Button type="submit" text="check" />
        </Form>
      </Formik>
    </section>
  );
};

