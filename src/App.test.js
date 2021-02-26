import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render an App component", () => {
    const { getByDisplayValue } = render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();
    expect(getByDisplayValue("test display text value")).toBeInTheDocument();
  });
});
