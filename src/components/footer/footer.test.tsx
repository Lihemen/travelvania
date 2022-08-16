import React from "react";
import { render, screen } from "@testing-library/react";

import { Footer } from ".";

test("renders author name", () => {
  render(<Footer />);
  const authorName = screen.getByText(/hemense lan/i);
  expect(authorName).toBeInTheDocument();
});
