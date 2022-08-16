import React from "react";

import PageHeader from "../../components/page-header";
import safari from "../../assets/images/safari.webp";

export default function HotelsList() {
  return (
    <>
      <PageHeader image={safari} name="All Hotels" link="hotels" />
      <h2>List of Hotels</h2>
    </>
  );
}

