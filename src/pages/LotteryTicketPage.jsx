import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LotteryDrawCard, LotteryTicketCard } from "../components";
import "./css/lotteryTicketPage.css";

const LotteryTicketPage = () => {
  const [lotteryTicketData, setLotteryTicketData] = useState([]);
  const location = useLocation();
  const drawData = location.state || {};

  const randNumber = (n) => {
    return Math.floor(Math.random() * n + 1);
  };

  //Funcation to generate random 6 unique whole numbers between 0 and n
  const sixUniqueRandBetweenZeroAndN = (n) => {
    const set = new Set();
    while (set.size <= 6) {
      set.add(randNumber(n));
    }
    return [...set].sort((a, b) => a - b);
  };

  const createTicketData = () => {
    const numbers = sixUniqueRandBetweenZeroAndN(60);
    return {
      id: 1,
      drawDate: `For ${drawData.drawDate}`,
      picked_number1: numbers[0],
      picked_number2: numbers[1],
      picked_number3: numbers[2],
      picked_number4: numbers[3],
      picked_number5: numbers[4],
      picked_number6: numbers[5],
      "picked_bonus-ball": randNumber(50),
      topPrize: randNumber(100000000),
    };
  };

  //Generate a ticket on page load
  useEffect(() => {
    const data = createTicketData();
    setLotteryTicketData([data]);
  }, []);

  //Function to generate a ticket when the button is clicked
  const handleClick = () => {
    const data = createTicketData();
    const allData = [...lotteryTicketData, data];
    console.log(allData);
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
