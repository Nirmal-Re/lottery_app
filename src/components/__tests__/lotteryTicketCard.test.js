import { render, screen, cleanup } from "@testing-library/react";

import LotteryTicketCard from "../LotteryTicketCard";
import { lotteryData } from "../../constants/constant";
import { createTicketData } from "../../utills";

afterEach(() => {
  cleanup();
});

test("should render LotteryTicketCard component", () => {
  const { draws } = lotteryData;
  const index = 0;
  const lotteryTicketData = createTicketData(draws[index].drawDate);
  render(<LotteryTicketCard {...lotteryTicketData} drawData={draws[index]} />);
  const lotteryDrawCardElement = screen.getByTestId(`${lotteryTicketData.id}`);
  expect(lotteryDrawCardElement).toBeInTheDocument();
});
