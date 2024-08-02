import React from "react";

const LotteryDrawCard = (lottery_draw_data) => {
  return (
    <div className="LotteryDrawCard">
      <header className="LotteryDrawCard-header">
        <h2>Lottery Draw Card</h2>
        <p>Draw Date: {lottery_draw_data.drawDate}</p>
        <p>Number 1: {lottery_draw_data.number1}</p>
        <p>Number 2: {lottery_draw_data.number2}</p>
        <p>Number 3: {lottery_draw_data.number3}</p>
        <p>Number 4: {lottery_draw_data.number4}</p>
        <p>Number 5: {lottery_draw_data.number5}</p>
        <p>Number 6: {lottery_draw_data.number6}</p>
        <p>Bonus Ball: {lottery_draw_data.bonusBall}</p>
        <p>Top Prize: {lottery_draw_data.topPrize}</p>
      </header>
    </div>
  );
};

export default LotteryDrawCard;
