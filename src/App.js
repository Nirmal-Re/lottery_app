import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { LotteryDrawPage, LotteryTicketPage } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LotteryDrawPage />} />
          <Route path="/lottery-ticket" element={<LotteryTicketPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
