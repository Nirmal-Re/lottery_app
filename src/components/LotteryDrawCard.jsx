import React from "react";
import "./css/LotteryDrawCard.css";

const LotteryDrawCard = (lottery_draw_data) => {
  const {
    id,
    drawDate,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    bonusBall,
    topPrize,
  } = lottery_draw_data;
  return (
    <div data-testid={id} className="lotteryDrawCard">
      <div className="card-header">
        <span>Lottery Draw</span>
        <span>{drawDate}</span>
      </div>
      <div className="line"></div>
      <p>Number 1: {number1}</p>
      <p>Number 2: {number2}</p>
      <p>Number 3: {number3}</p>
      <p>Number 4: {number4}</p>
      <p>Number 5: {number5}</p>
      <p>Number 6: {number6}</p>
      <p>Bonus Ball: {bonusBall}</p>
      <p>Top Prize: {topPrize}</p>
    </div>
  );
};

export default LotteryDrawCard;
