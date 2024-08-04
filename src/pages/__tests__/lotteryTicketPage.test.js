import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { LotteryTicketPage } from "..";
import { lotteryData } from "../../constants/constant";

// Mock the react-router-dom's useLocation hook
//this is done because test environment does not have access to the location object
jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  const mockedUsedNavigate = jest.fn();
  return {
    ...actual,
    useLocation: jest.fn(),
    useNavigate: () => mockedUsedNavigate,
  };
});

afterEach(() => {
  cleanup();
});

test("should redirect to HomePage because state is not provided", () => {
  const { useNavigate } = require("react-router-dom");
  const navigate = useNavigate();

  const mockLocation = { state: {} };
  Object.defineProperty(window, "location", {
    writable: true,
    value: mockLocation,
  });

  render(
    <Router>
      <LotteryTicketPage />
    </Router>
  );
  // Assert that navigate was called with the expected path
  expect(navigate).toHaveBeenCalledWith("/");
});

test("should render LotteryTicketPage component with lottery draw values and initial random lottery ticket", () => {
  const history = createMemoryHistory();
  const { useLocation } = require("react-router-dom");

  // Mock the location state with imported mockData
  useLocation.mockReturnValue({ state: lotteryData.draws[0] });

  render(
    <Router history={history}>
      <LotteryTicketPage />
    </Router>
  );
  const lotteryTicketPageElement = screen.getByTestId("lottery-ticket-page");
  expect(lotteryTicketPageElement).toBeInTheDocument();
  const lotteryDrawInElement = screen.getByTestId(`${lotteryData.draws[0].id}`);
  expect(lotteryDrawInElement).toBeInTheDocument();
});

test("check if Generate Ticket button work and creates unique ticket everytime", () => {
  const history = createMemoryHistory();
  const { useLocation } = require("react-router-dom");

  // Mock the location state with imported mockData
  useLocation.mockReturnValue({ state: lotteryData.draws[0] });

  render(
    <Router history={history}>
      <LotteryTicketPage />
    </Router>
  );
  for (let i = 1; i < 10; i++) {
    const generateTicketButton = screen.getByText("Generate Ticket");
    fireEvent.click(generateTicketButton);
    const lotteryTickets = screen.getAllByTestId(`lottery-ticket-${i}`);
    expect(lotteryTickets.length).toBe(1);
  }
});
