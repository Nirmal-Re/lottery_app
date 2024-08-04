import { render, screen, cleanup } from "@testing-library/react";
import ErrorCard from "../ErrorCard";
afterEach(() => {
  cleanup();
});

test("should render ErrorCard component", () => {
  render(<ErrorCard error={"Missing Data"} />);
  const errorCardElement = screen.getByTestId(`error-card-id`);
  expect(errorCardElement).toBeInTheDocument();
  expect(errorCardElement).toHaveClass("error-card");
  expect(errorCardElement).toContainHTML(`<h2 class="title-text">Error</h2>`);
  expect(errorCardElement).toHaveTextContent("Missing Data");
});
