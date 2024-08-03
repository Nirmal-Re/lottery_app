import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LotteryDrawCard, LotteryTicketCard } from "../components";
import "./css/lotteryTicketPage.css";

const LotteryTicketPage = () => {
  const [lotteryTicketData, setLotteryTicketData] = useState([]);
  const location = useLocation();
  const message = location.state || {};

  //Funcation to generate random 7 unique whole numbers between 0 and n
  const sevenUniqueRandBetweenZeroAndN = (n) => {
    const set = new Set();
    while (set.size < 7) {
      set.add(Math.floor(Math.random() * n + 1));
    }
    return [...set].sort((a, b) => a - b);
  };

  const createTicketData = () => {
    const numbers = sevenUniqueRandBetweenZeroAndN(50);
    return {
      id: 1,
      drawDate: `For ${message.drawDate}`,
      number1: numbers[0],
      number2: numbers[1],
      number3: numbers[2],
      number4: numbers[3],
      number5: numbers[4],
      number6: numbers[5],
      "bonus-ball": numbers[6],
      topPrize: 1000000,
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
      <div className="lottery-draw">
        <h1>Drawn Lottery</h1>
        <LotteryDrawCard {...message} />
      </div>
      <div className="lottery-tickets">
        <h2>Your Lottery Tickets</h2>
        <div className="all-lottery-tickets">
          {lotteryTicketData.map((lotterDrawData, index) => {
            return <LotteryTicketCard key={index} {...lotterDrawData} />;
          })}
        </div>
      </div>
      <button onClick={handleClick}> Generate Tickets </button>
    </div>
  );
};

export default LotteryTicketPage;
