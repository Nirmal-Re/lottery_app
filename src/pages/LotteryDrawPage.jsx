import { useNavigate } from "react-router-dom";

import { lotteryData } from "../constants/constant";
import { LotteryDrawCard } from "../components";
import "./css/lotteryDrawPage.css";

const LotteryDrawPage = () => {
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  //to redirect to lottery-ticket page when user clicks a button
  const handleRedirect = (data) => {
    delete data.handleRedirect;
    navigate("/lottery-ticket", { state: data });
  };

  return (
    <>
      <div className="intro">All Lottery draws</div>
      <div data-testid="lottery-draw-page" className="lottery-draw-page-css">
        {lotteryData?.draws.map((lotterDrawData, index) => {
          return (
            <LotteryDrawCard
              key={index}
              {...lotterDrawData}
              handleRedirect={handleRedirect}
            />
          );
        })}
      </div>
    </>
  );
};

export default LotteryDrawPage;
