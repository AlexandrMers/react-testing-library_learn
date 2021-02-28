import axios from "axios";
import { act, render } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const HITS = [
  {
    objectID: "1",
    title: "Angular",
  },
  {
    objectID: "2",
    title: "React",
  },
];

const URL = "http://hn.algolia.com/api/v1/search?query=React";

describe("App", () => {
  it("fetches news from an API", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { hits: HITS },
      })
    );

    const { getByRole, findAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));

    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(URL);
  });

  it("fetches news from an API and rejected", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    const { getByRole, findByText } = render(<App />);
    userEvent.click(getByRole("button"));

    const message = await findByText(/Something went wrong/i);

    expect(message).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(URL);
  });

  it("fetches news from an API with act", async () => {
    const promise = Promise.resolve({
      data: { hits: HITS },
    });

    axios.get.mockImplementationOnce(() => promise);

    const { getByRole, getAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    await act(() => promise);

    const items = getAllByRole("listitem");
    expect(items).toHaveLength(2);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(URL);
  });
});
