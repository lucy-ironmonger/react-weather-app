import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("ForecastDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );
    expect(getByText("Manchester, UK")).toBeTruthy();
  });
});
