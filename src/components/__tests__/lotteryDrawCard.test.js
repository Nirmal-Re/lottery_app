import { render, screen, cleanup } from "@testing-library/react";
import LotteryDrawCard from "../LotteryDrawCard";
import { lotteryData } from "../../constants/constant";

afterEach(() => {
  cleanup();
});

test("should render LotteryDrawCard component", () => {
  const { draws } = lotteryData;
  const index = 0;
  render(<LotteryDrawCard {...draws[index]} />);
  const lotteryDrawCardElement = screen.getByTestId(`draw-${index + 1}`);
  expect(lotteryDrawCardElement).toBeInTheDocument();
});
