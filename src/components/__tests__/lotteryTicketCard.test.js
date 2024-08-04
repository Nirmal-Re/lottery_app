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
  const lotteryTicketData = createTicketData(draws[index].drawDate, "0");
  render(<LotteryTicketCard {...lotteryTicketData} drawData={draws[index]} />);
  const lotteryDrawCardElement = screen.getByTestId(
    `lottery-ticket-${lotteryTicketData.id}`
  );
  expect(lotteryDrawCardElement).toBeInTheDocument();
});

test("should render ErrorCard component when data is missing", () => {
  render(<LotteryTicketCard />);
  const errorCardElement = screen.getByTestId(`error-card-id`);
  expect(errorCardElement).toBeInTheDocument();
});

test("should contain correct data in LotteryTicketCard component", () => {
  const { draws } = lotteryData;
  const index = 0;
  const lotteryTicketData = createTicketData(draws[index].drawDate, "0");
  render(<LotteryTicketCard {...lotteryTicketData} drawData={draws[index]} />);
  const lotteryTicketCardElement = screen.getByTestId(
    `lottery-ticket-${lotteryTicketData.id}`
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.drawDate
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number1
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number2
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number3
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number4
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number5
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData.picked_number6
  );
  expect(lotteryTicketCardElement).toHaveTextContent(
    lotteryTicketData["picked_bonus-ball"]
  );
  expect(lotteryTicketCardElement).toHaveTextContent("You Won");
});
