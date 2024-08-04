import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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

test("onClick event in VIEW YOUR TICKETS link should navigate to lottery-ticket page with data from the draw", () => {
  render(
    <Router>
      <LotteryDrawPage />
    </Router>
  );
  const { draws } = lotteryData;
  const index = 1;
  const clickableDiv = screen.getByTestId(
    `view-your-tickets-button-draw-${[index + 1]}`
  );
  fireEvent.click(clickableDiv);
  expect(window.location.pathname).toBe("/lottery-ticket");
  //checks state in lottey-ticket page
  expect(window.history.state.usr).toEqual({ ...draws[index] });
});
