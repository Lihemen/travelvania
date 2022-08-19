import React from "react";
import { Form, Formik } from "formik";

import { Hotel } from "../../../../types";

// import { Checkbox } from "../../../../components/checkbox";
type Props = {
  hotels: Hotel[];
  applyFilter: () => void;
  clearFilter: () => void;
};

class Query {
  list: Hotel[];
  constructor(hotels: Hotel[]) {
    this.list = hotels;
  }

  filterByChain(chain: string) {
    this.list = this.list.filter((hotel) => hotel.chain === chain);

    return this;
  }
}

export const Filter: React.FC<Props> = (props) => {
  return (
    <aside className="filters">
      <h2>Filters</h2>
      <Formik initialValues={{ chain: "" }} onSubmit={props.applyFilter}>
        <Form></Form>
      </Formik>
    </aside>
  );
};

