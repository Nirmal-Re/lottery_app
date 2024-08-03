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
    topPrize,
  } = lottery_draw_data;
  return (
    <div data-testid={id} className="lotteryDrawCard">
      <div className="card-header">
        <span>Lottery Draw</span>
        <span>{drawDate}</span>
      </div>
      <div className="line"></div>
      <div className="company-name">
        <div className="city">London</div>
        <div className="lottery-name">Bonus Ball</div>
      </div>
      <div className="winning-numbers">
        <div className="text">Winning Numbers</div>
        <div className="numbers">
          <span className="regular-ball">{number1}</span>
          <span className="regular-ball">{number2}</span>
          <span className="regular-ball">{number3}</span>
          <span className="regular-ball">{number4}</span>
          <span className="regular-ball">{number5}</span>
          <span className="regular-ball">{number6}</span>
          <span className="bonus-ball">{lottery_draw_data["bonus-ball"]}</span>
        </div>
      </div>
      <div className="more-info">
        <div className="jackpot-winners info-box">
          <span className="text">Jackpot Winners</span>
          <span className="text">0</span>
        </div>
        <div className="top-prize info-box">
          <span className="text">Top Prize</span>
          <span className="text">{topPrize}</span>
        </div>
        <div className="view-your-tickets-button ticket-box">
          <span className="text">View Your Tickets</span>
        </div>
      </div>
    </div>
  );
};

export default LotteryDrawCard;
