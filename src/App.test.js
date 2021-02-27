import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("render app component", () => {
    render(<App />);
  });

  it("correct change input value", () => {
    render(<App />);

    const INITIAL_VALUE = "";
    const CHANGED_VALUE = "changed value";

    const inputElem = screen.getByPlaceholderText("search");
    expect(inputElem).toHaveValue(INITIAL_VALUE);
    fireEvent.change(inputElem, {
      target: {
        value: CHANGED_VALUE,
      },
    });
    expect(inputElem).toHaveValue(CHANGED_VALUE);
    expect(
      screen.getByText(`Searches for ${CHANGED_VALUE}`)
    ).toBeInTheDocument();
  });
});
