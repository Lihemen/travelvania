import React from "react";
import { render, screen } from "@testing-library/react";

import { Navbar } from ".";

test("should render logo", () => {
  render(<Navbar />);
  expect(screen.getByText(/travelvania/i)).toBeInTheDocument();
});

