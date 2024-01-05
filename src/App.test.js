import { render, screen } from "@testing-library/react";
import App from "./App";

test("render component", () => {
  render(<App />);
  const element = screen.getByRole("main");
  expect(element).toBeInTheDocument();
});
