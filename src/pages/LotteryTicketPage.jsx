import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { createTicketData } from "../utills";
import { LotteryDrawCard, LotteryTicketCard } from "../components";
import "./css/lotteryTicketPage.css";

const LotteryTicketPage = () => {
  const location = useLocation();
  const drawData = location?.state || {};
  const navigate = useNavigate();
  !drawData?.drawDate && navigate("/");

  const [lotteryTicketData, setLotteryTicketData] = useState([]);

  //Generate a ticket on page load

  useEffect(() => {
    const data = createTicketData(drawData.drawDate, "0");
    setLotteryTicketData([data]);
  }, []);

  //Function to generate a ticket when the button is clicked
  const handleClick = () => {
    const data = createTicketData(
      drawData.drawDate,
      `${lotteryTicketData.length}`
    );
    const allData = [...lotteryTicketData, data];
    setLotteryTicketData(allData);
  };

  return (
    <>
      {!drawData?.drawDate ? (
        // Render nothing or a loading spinner here
        <div>Loading...</div>
      ) : (
        <div>
          <div
            data-testid="lottery-ticket-page"
            className="lottery-ticket-page"
          >
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
      )}
    </>
  );
};

export default LotteryTicketPage;
