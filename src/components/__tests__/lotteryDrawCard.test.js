import { render, screen, cleanup } from "@testing-library/react";
import { navigate } from "react-router-dom";
import { act } from "react";
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

test("should render ErrorCard component when data is missing", () => {
  render(<LotteryDrawCard />);
  const errorCardElement = screen.getByTestId(`error-card-id`);
  expect(errorCardElement).toBeInTheDocument();
});

test("should contain correct data in LotteryDrawCard component and not have VIEW YOUR TICKETS link", () => {
  const { draws } = lotteryData;
  const index = 0;
  render(<LotteryDrawCard {...draws[index]} />);
  const lotteryDrawCardElement = screen.getByTestId(`draw-${index + 1}`);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].drawDate);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number1);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number2);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number3);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number4);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number5);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number6);
  expect(lotteryDrawCardElement).toHaveTextContent(
    draws[index].topPrize.toLocaleString()
  );
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index]["bonus-ball"]);
});

test("should contain correct data in LotteryDrawCard component and have VIEW YOUR TICKETS link", () => {
  const { draws } = lotteryData;
  const index = 1;

  render(
    <LotteryDrawCard
      {...draws[index]}
      handleRedirect={() => {
        navigate("/lottery-ticket", { state: {} });
      }}
    />
  );
  const lotteryDrawCardElement = screen.getByTestId(`draw-${index + 1}`);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].drawDate);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number1);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number2);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number3);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number4);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number5);
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index].number6);
  expect(lotteryDrawCardElement).toHaveTextContent(
    draws[index].topPrize.toLocaleString()
  );
  expect(lotteryDrawCardElement).toHaveTextContent(draws[index]["bonus-ball"]);
  expect(lotteryDrawCardElement).toHaveTextContent("View Your Tickets");
  expect(lotteryDrawCardElement).toContainHTML(
    `<div class="view-your-tickets-button ticket-box"><span class="text">View Your Tickets</span></div>`
  );
});
