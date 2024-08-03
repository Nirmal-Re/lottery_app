import { useNavigate } from "react-router-dom";

import { lotteryData } from "../constants/constant";
import { LotteryDrawCard } from "../components";
import "./css/lotteryDrawPage.css";

const LotteryDrawPage = () => {
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const handleRedirect = (data) => {
    delete data.handleRedirect;
    navigate("/lottery-ticket", { state: data });
  };
  return (
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
  );
};

export default LotteryDrawPage;
