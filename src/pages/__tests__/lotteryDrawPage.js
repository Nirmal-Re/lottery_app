import { render, screen, cleanup } from "@testing-library/react";
import { LotteryDrawPage } from "../../pages";
import { lotteryData } from "../../constants/constant";

afterEach(() => {
  cleanup();
});

test("should render LotteryDrawPage component", () => {
  render(<LotteryDrawPage />);
  const lotteryDrawPageElement = screen.getByTestId("lottery-draw-page");
  expect(lotteryDrawPageElement).toBeInTheDocument();
});

test("should render LotteryDrawPage with all data", () => {
  render(<LotteryDrawPage />);
  const { draws } = lotteryData;
  const totalDraws = draws.length;
  for (let index = 0; index < totalDraws; index++) {
    const lotteryDrawCardElement = screen.getByTestId(`draw-${index + 1}`);
    expect(lotteryDrawCardElement).toBeInTheDocument();
  }
});
