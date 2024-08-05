import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LotteryDrawPage, LotteryTicketPage } from "./pages";
import { Navbar } from "./components";
import "./App.css";

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
