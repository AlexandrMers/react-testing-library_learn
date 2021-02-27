import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("async render user title", async () => {
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
  });

  it("title have className", async () => {
    expect(await screen.findByText(/Logged in as/i)).toHaveClass("user-title");
  });

  describe("testing input element", () => {
    let input;
    beforeEach(() => {
      input = screen.getByPlaceholderText(/search/i);
    });

    it("input should be empty", () => {
      expect(input).toHaveValue("");
    });

    it("input should have an text attribute", () => {
      expect(input).toHaveAttribute("type", "text");
    });

    it("input isn't required", () => {
      expect(input).not.toBeRequired();
    });

    it("input should have id 'search'", () => {
      expect(input).toHaveAttribute("id", "search");
    });
  });
});
