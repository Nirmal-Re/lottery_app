import React from "react";
import ErrorCard from "./ErrorCard";
import "./css/AllComponents.css";
import "./css/LotteryTicketCard.css";

const LotteryTicketCard = (lotteryTicketData) => {
  const {
    id,
    drawDate,
    picked_number1,
    picked_number2,
    picked_number3,
    picked_number4,
    picked_number5,
    picked_number6,
    drawData,
  } = lotteryTicketData;

  //Defensive programming: if any important data is missing, error card will be displayed
  if (
    !lotteryTicketData ||
    !id ||
    !drawDate ||
    !picked_number1 ||
    !picked_number2 ||
    !picked_number3 ||
    !picked_number4 ||
    !picked_number5 ||
    !picked_number6 ||
    !lotteryTicketData["picked_bonus-ball"] ||
    !drawData
  ) {
    return <ErrorCard error="Missing data" />;
  }

  //Draw numbers
  const { number1, number2, number3, number4, number5, number6 } = drawData;
  if (
    !number1 ||
    !number2 ||
    !number3 ||
    !number4 ||
    !number5 ||
    !number6 ||
    !drawData["bonus-ball"]
  ) {
    return <ErrorCard error="Missing data" />;
  }

  const orginalNumbers = new Set([
    Number(number1),
    Number(number2),
    Number(number3),
    Number(number4),
    Number(number5),
    Number(number6),
  ]);

  //picked numbers
  const pickedNumbers = new Set([
    picked_number1,
    picked_number2,
    picked_number3,
    picked_number4,
    picked_number5,
    picked_number6,
  ]);

  let totalMatch = [...pickedNumbers].filter((x) =>
    orginalNumbers.has(x)
  ).length;
  totalMatch =
    drawData["bonus-ball"] === lotteryTicketData["picked_bonus-ball"]
      ? totalMatch + 1
      : totalMatch;

  function calculatePrizeFromPot(totalMatches, totalPot) {
    let prizePercentage;
    switch (totalMatches) {
      case 7:
        prizePercentage = 1;
        break;
      case 6:
        prizePercentage = 0.6;
        break;
      case 5:
        prizePercentage = 0.5;
        break;
      case 4:
        prizePercentage = 0.4;
        break;
      case 3:
        prizePercentage = 0.02;
        break;
      case 2:
        prizePercentage = 0.01;
        break;
      default:
        prizePercentage = 0;
    }
    return (totalPot * prizePercentage).toLocaleString();
  }
  return (
    <div data-testid={`lottery-ticket-${id}`} className="lottery-card">
      <div className="card-header">
        <span>Lottery Ticket</span>
        <span>{drawDate}</span>
      </div>
      <div className="line"></div>
      <div className="company-name">
        <div className="city">London</div>
        <div className="lottery-name">Bonus Ball</div>
      </div>
      <div className="all-numbers">
        <div className="text">Your Numbers</div>
        <div className="numbers">
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number1) ? "correct" : "incorrect"
            }`}
          >
            {picked_number1}
          </span>
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number2) ? "correct" : "incorrect"
            }`}
          >
            {picked_number2}
          </span>
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number3) ? "correct" : "incorrect"
            }`}
          >
            {picked_number3}
          </span>
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number4) ? "correct" : "incorrect"
            }`}
          >
            {picked_number4}
          </span>
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number5) ? "correct" : "incorrect"
            }`}
          >
            {picked_number5}
          </span>
          <span
            className={`regular-ball ${
              orginalNumbers.has(picked_number6) ? "correct" : "incorrect"
            }`}
          >
            {picked_number6}
          </span>
          <span
            className={`bonus-ball ${
              drawData["bonus-ball"] === lotteryTicketData["picked_bonus-ball"]
                ? "correct"
                : "incorrect"
            }`}
          >
            {lotteryTicketData["picked_bonus-ball"]}
          </span>
        </div>
      </div>
      <div className="more-info">
        <div className="jackpot-winners info-box">
          <span className="text">Number of Match</span>
          <span className="text">{totalMatch}</span>
        </div>
        <div className="top-prize info-box">
          <span className="text">You Won</span>
          <span className="text">
            £{calculatePrizeFromPot(totalMatch, drawData.topPrize)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LotteryTicketCard;
