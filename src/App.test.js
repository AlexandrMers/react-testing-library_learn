import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    userEvent.type(inputElem, CHANGED_VALUE);
    // });
    expect(inputElem).toHaveValue(CHANGED_VALUE);
    expect(
      screen.getByText(`Searches for ${CHANGED_VALUE}`)
    ).toBeInTheDocument();
  });

  it("check focus", () => {
    const { getAllByTestId } = render(
      <div>
        <input type="text" data-testid="element" />
        <input type="radio" data-testid="element" />
        <input type="number" data-testid="element" />
      </div>
    );
    const [text, radio, number] = getAllByTestId("element");

    userEvent.tab(text);
    expect(text).toHaveFocus();

    userEvent.tab(radio);
    expect(radio).toHaveFocus();

    userEvent.tab(number);
    expect(number).toHaveFocus();
  });

  it("select options", () => {
    const { getByRole, getByText } = render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    userEvent.selectOptions(getByRole("combobox"), "1");
    expect(getByText("A").selected).toBeTruthy();

    userEvent.selectOptions(getByRole("combobox"), "2");
    expect(getByText("B").selected).toBeTruthy();
    expect(getByText("C").selected).toBeFalsy();
  });
});
