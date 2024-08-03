import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { LotteryDrawPage } from "..";
import { lotteryData } from "../../constants/constant";

afterEach(() => {
  cleanup();
});

test("should render LotteryDrawPage component", () => {
  render(
    <Router>
      <LotteryDrawPage />
    </Router>
  );
  const lotteryDrawPageElement = screen.getByTestId("lottery-draw-page");
  expect(lotteryDrawPageElement).toBeInTheDocument();
});

test("should render LotteryDrawPage with all data", () => {
  render(
    <Router>
      <LotteryDrawPage />
    </Router>
  );
  const { draws } = lotteryData;
  const totalDraws = draws.length;
  for (let index = 0; index < totalDraws; index++) {
    const lotteryDrawCardElement = screen.getByTestId(`draw-${index + 1}`);
    expect(lotteryDrawCardElement).toBeInTheDocument();
  }
});
