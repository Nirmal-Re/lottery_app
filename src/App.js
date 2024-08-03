import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { LotteryDrawPage, LotteryTicketPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LotteryDrawPage />} />
          <Route path="/lottery-ticket" element={<LotteryTicketPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
