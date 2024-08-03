import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { createTicketData } from "../utills";
import { LotteryDrawCard, LotteryTicketCard } from "../components";
import "./css/lotteryTicketPage.css";

const LotteryTicketPage = () => {
  const [lotteryTicketData, setLotteryTicketData] = useState([]);
  const location = useLocation();
  const drawData = location.state || {};

  //Generate a ticket on page load
  useEffect(() => {
    const data = createTicketData();
    setLotteryTicketData([data]);
  }, []);

  //Function to generate a ticket when the button is clicked
  const handleClick = () => {
    const data = createTicketData(drawData.drawDate);
    const allData = [...lotteryTicketData, data];
    setLotteryTicketData(allData);
  };

  return (
    <div>
      <div className="lottery-ticket-page">
        <h1>Drawn Lottery</h1>
        <LotteryDrawCard {...drawData} />
      </div>
      <div className="lottery-tickets">
        <h2>Your Lottery Tickets</h2>
        <div className="all-lottery-tickets">
          {lotteryTicketData.map((lotteryTicketData, index) => {
            return (
              <LotteryTicketCard
                key={index}
                {...lotteryTicketData}
                drawData={drawData}
              />
            );
          })}
        </div>
      </div>
      <button className={`gen-ticket-button`} onClick={handleClick}>
        Generate Ticket
      </button>
    </div>
  );
};

export default LotteryTicketPage;
