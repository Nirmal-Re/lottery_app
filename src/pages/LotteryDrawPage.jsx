import { lotteryData } from "../constants/constant";
import { LotteryDrawCard } from "../components";
const LotteryDrawPage = () => {
  return (
    <div className="LotteryDrawPage">
      {lotteryData?.draws.map((lottery_draw_data, index) => {
        return <LotteryDrawCard key={index} {...lottery_draw_data} />;
      })}
    </div>
  );
};

export default LotteryDrawPage;
