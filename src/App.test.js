import { render } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  const { asFragment, getByText } = render(<App />);
  const resultText = getByText(/Search:/i);

  expect(asFragment(<App />)).toMatchSnapshot();
  expect(resultText).toBeInTheDocument();
});